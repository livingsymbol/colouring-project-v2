import { useEffect, useRef, useState } from "react";
import Symbol from "../../public/symbol/Symbol.jsx";
import Symbol_without_desc from "../../public/symbol/Symbol_without_desc.jsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { gradeColours } from "../utils/scoring.js";
import { useLocale } from "../context/LocaleContext.jsx";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "90%", // 90% width on extra-small screens
    sm: 400, // 400px width on small screens
    md: 500, // 500px width on medium screens
  },
  bgcolor: "background.paper",
  border: "5px solid #d5af3c",
  borderRadius: "10px",
  boxShadow: 25,
  p: 2,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};

const DesignCanvas = ({ color, showDesc = false, isColours1 = true, isColouring5 = false, sparkleColor, count }) => {
  const svgRef = useRef(null);
  const canvasRef = useRef(null);
  const symbolTextRef = useRef(null);

  const [colourArray, setColourArray] = useState(() => {
    const savedColors = localStorage.getItem("colourArray");
    return savedColors ? JSON.parse(savedColors) : Array(12).fill("#fff");
  });
  const [open, setOpen] = useState(false);
  const [scoreMessage, setScoreMessage] = useState("");

  const [input, setInput] = useState(""); // State to store the user's input

  const [illumination, setIllumination] = useState(0.5); // 0-1
  const [intensity, setIntensity] = useState(0); // 0-1

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { locale } = useLocale();

  useEffect(() => {
    const inputRef = { current: "" };

    const handleKeyPress = (event) => {
      inputRef.current += event.key;
      setInput(inputRef.current); // optional, if you want to see it in state

      const lowerInput = inputRef.current.toLowerCase();

      if (lowerInput.includes("1fill")) {
        const correctAns = [
          "#ff6600",
          "#ff9933",
          "#ffcc00",
          "#ffff00",
          "#00cc00",
          "#009900",
          "#00cccc",
          "#0000ff",
          "#330099",
          "#6600cc",
          "#9900cc",
          "#ff0000",
        ];
        localStorage.setItem("colourArray", JSON.stringify(correctAns));
        setColourArray(correctAns); // <-- update state immediately
        inputRef.current = "";
        setInput("");
      }

      if (lowerInput.includes("2fill")) {
        const correctAns = [
          "#FF8000",
          "#FFAA00",
          "#FFFF00",
          "#55FF00",
          "#00FF00",
          "#00FFFF",
          "#0000FF",
          "#4000FF",
          "#8000FF",
          "#FF00FF",
          "#FF0000",
          "#FF5500",
        ];
        localStorage.setItem("colourArray", JSON.stringify(correctAns));
        setColourArray(correctAns); // <-- update state immediately
        inputRef.current = "";
        setInput("");
      }
    };

    window.addEventListener("keypress", handleKeyPress);
    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, []);


  useEffect(() => {
    const svgElement = svgRef.current;
    colourArray.forEach((color, index) => {
      const pathElement = svgElement.querySelector(`#path-${index}`);
      if (pathElement) {
        pathElement.setAttribute("fill", color);
      }
    });
  }, [colourArray]);

  useEffect(() => {
    const svgElement = svgRef.current;

    const extractNumber = (text) =>
      parseInt((text.match(/path-(\d+)/) || [])[1], 10);

    const handleClick = (event) => {
      const { target } = event;
      if (target.tagName !== "svg") {
        const index = extractNumber(target.id);
        target.setAttribute("fill", color);
        const newColourArray = [...colourArray];
        newColourArray[index] = color;
        setColourArray(newColourArray);
        localStorage.setItem("colourArray", JSON.stringify(newColourArray)); // Save the updated array to localStorage
      }
    };

    svgElement.addEventListener("click", handleClick);

    return () => {
      svgElement.removeEventListener("click", handleClick);
    };
  }, [color, colourArray]);

  const saveAsPng = () => {
    const baseSvg = svgRef.current;
    const textSvg = symbolTextRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let svgToSerialize;

    if (showDesc && textSvg) {
      const clone = baseSvg.cloneNode(true);

      Array.from(textSvg.childNodes).forEach((node) => {
        clone.appendChild(node.cloneNode(true));
      });

      svgToSerialize = clone;
    } else {
      svgToSerialize = baseSvg;
    }

    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svgToSerialize);

    const svgBlob = new Blob([svgString], {
      type: "image/svg+xml;charset=utf-8",
    });

    const url = URL.createObjectURL(svgBlob);
    const img = new Image();

    canvas.width = 708;
    canvas.height = 708;

    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);

      const link = document.createElement("a");
      link.download = "colouring.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    };

    img.src = url;
  };


  const revealScore = () => {
    const NUM = isColours1 ? 1 : 2;
    const { message, score } = gradeColours(colourArray, NUM, locale);

    // Parse localStorage safely
    let existing = [];
    try {
      const stored = JSON.parse(localStorage.getItem("scorecard"));
      if (Array.isArray(stored)) {
        existing = stored;
      }
    } catch (err) {
      console.error("Invalid scorecard in localStorage, resetting.", err);
    }

    // Remove old entry for same colouring & add new
    const updated = existing.filter((s) => s.colouring !== NUM);
    updated.push({ colouring: NUM, score });

    // Save array back
    localStorage.setItem("scorecard", JSON.stringify(updated));

    setScoreMessage(message);
    handleOpen();
  };

  const resetSymbol = () => {
    const resetColourArray = Array(12).fill("#ffffff"); // Reset color array to all white
    setColourArray(resetColourArray); // Update state
    localStorage.setItem("colourArray", JSON.stringify(resetColourArray)); // Save to localStorage

    const svgElement = svgRef.current;
    resetColourArray.forEach((color, index) => {
      const pathElement = svgElement.querySelector(`#path-${index}`);
      if (pathElement) {
        pathElement.setAttribute("fill", color);
      }
    });
  };

  return (
    <div className="w-full">
      <div className="flex flex-col gap-y-2 items-center">
        <div className="overflow-hidden w-full relative">

          {showDesc ?
            <Symbol ref={svgRef} symbolTextRef={symbolTextRef} className="w-full h-full" color={color} isColouring5={isColouring5} sparkleColor={sparkleColor} count={count} />
            :
            <Symbol_without_desc
              ref={svgRef}
              className="w-full h-full"
              color={color}
            />
          }
        </div>
        <canvas
          ref={canvasRef}
          width="708.661"
          height="708.661"
          style={{ display: "none" }}
        />
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <div>
            {!showDesc && <button
              className="cursor-pointer w-32 py-2 text-md md:text-lg font-semibold text-white bg-[#d5af3c] rounded-lg duration-100 hover:bg-[#d5af3cc8] hover:text-white shadow-2xl"
              onClick={revealScore}>{locale === "en" ? "Reveal" : "Показать"}</button>}
            <Modal open={open} onClose={handleClose}>
              <Box sx={style}>
                <Typography
                  id="modal-modal-title"
                  variant="h5"
                  component="h5"
                >
                  {scoreMessage}
                </Typography>
              </Box>
            </Modal>
          </div>
          <button
            className="cursor-pointer w-32 py-2 text-md md:text-lg font-semibold text-white bg-[#d5af3c]  rounded-lg duration-100 hover:bg-[#d5af3cc8] hover:text-white shadow-2xl"
            onClick={saveAsPng}>{locale === "en" ? "Save" : "Скачать"}</button>
          <button
            className="cursor-pointer w-32 py-2 text-md md:text-lg font-semibold text-white bg-[#d5af3c]  rounded-lg duration-100 hover:bg-[#d5af3cc8] hover:text-white shadow-2xl"
            onClick={resetSymbol}>{locale === "en" ? "Reset" : "Сбросить"}</button>
        </div>
      </div>
    </div>
  );
};

export default DesignCanvas;
