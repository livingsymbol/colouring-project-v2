/* eslint-disable react/prop-types */
import { useState } from "react";
import { useLocale } from "../context/LocaleContext";

const ColorTester = ({ color }) => {
  const [spaces, setSpaces] = useState(["white", "white", "white"]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const { locale } = useLocale();

  const handleSpaceClick = (index) => {
    if (color && color !== "clear") {
      const updatedSpaces = [...spaces];
      updatedSpaces[index] = color;
      setSpaces(updatedSpaces);
      setSelectedIndex(index);
    }
  };

  const handleClear = () => {
    setSpaces(["white", "white", "white"]);
    setSelectedIndex(null);
  };

  return (
    <div className="h-full w-full flex flex-col items-center gap-4">
      <div className="text-[#d5af3c] text-center flex justify-center items-center font-semibold bg-white w-full h-12 rounded-md border-2 border-[#d5af3c]">
        {locale === "en" ? " Try selected colours below" : "Протестируйте вариации цвета ниже и выберите подходящий"}
      </div>
      <div
        className="w-full h-10 cursor-pointer rounded-md transition-colors duration-300 border-2 p-2 border-[#d5af3c] ease-in-out"
        style={{ backgroundColor: spaces[0] }}
        onClick={() => handleSpaceClick(0)}
      />
      <div
        className="w-full h-10 cursor-pointer rounded-md transition-colors duration-300 border-2 p-2 border-[#d5af3c] ease-in-out"
        style={{ backgroundColor: spaces[1] }}
        onClick={() => handleSpaceClick(1)}
      />
      <div
        className="w-full h-10 cursor-pointer rounded-md transition-colors duration-300 border-2 p-2 border-[#d5af3c] ease-in-out"
        style={{ backgroundColor: spaces[2] }}
        onClick={() => handleSpaceClick(2)}
      />
      <button
        onClick={handleClear}
        className="cursor-pointer px-4 py-1 md:px-8 md:py-2 text-md md:text-lg font-semibold text-white bg-[#d5af3c]  rounded-lg duration-100 hover:bg-[#d5af3cc8] hover:text-white shadow-2xl"
      >
        {locale === "en" ? "Reset" : "Сбросить"}
      </button>
    </div>
  );
};

export default ColorTester;
