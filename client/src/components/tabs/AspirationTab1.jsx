import { useState, useEffect } from "react";
import AspirationTabTemplate from "../AspirationTabTemplate";
import SwatchesColourPicker from "../SwatchesColourPicker";
import ColourTester from "../ColourTester";
import DesignCanvas from "../DesignCanvas";
import Paragraph from "../Paragraph";
import { colours1, shuffledColours1 } from "../../utils/scoring";
import { useLocale } from "../../context/LocaleContext";

export default function AspirationTab1() {
    const [color, setColor] = useState("#fff");
    const [selectedColor, setSelectedColor] = useState(null);
    const { locale } = useLocale();

    // const [devMode, setDevMode] = useState(false); // controls whether dev button is visible
    // const [useShuffled, setUseShuffled] = useState(true); // toggles colors source

    // Key tracking for showing dev button
    useEffect(() => {
        let buffer = "";
        const handleKey = (e) => {
            buffer += e.key.toLowerCase();
            if (buffer.includes("dev")) {
                setDevMode(true);
                buffer = "";
            }
            if (buffer.length > 3) buffer = buffer.slice(-3); // keep only last 3 chars
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, []);

    const handleColorSelect = (color) => {
        setColor(color);
        setSelectedColor(color);
    };

    const numRows = colours1.length;
    const numCols = colours1[0].length;

    // Step 1: Split into two equal row-wise halves
    const half = Math.floor(numRows / 2);
    const topHalf = colours1.slice(0, half);
    const bottomHalf = colours1.slice(half);

    // Step 2: Flatten each half column-wise
    function flattenColumnWise(array) {
        const result = [];
        const rows = array.length;
        const cols = array[0].length;

        for (let col = 0; col < cols; col++) {
            for (let row = 0; row < rows; row++) {
                result.push(array[row][col]);
            }
        }

        return result;
    }

    const flattenedTop = flattenColumnWise(topHalf);
    const flattenedBottom = flattenColumnWise(bottomHalf);

    // Step 3: Concatenate the two arrays
    const finalFlattened = flattenedTop.concat(flattenedBottom);

    // Decide colors based on toggle
    // const colorsToShow = useShuffled ? finalFlattened : shuffledColours1;

    return (
        <AspirationTabTemplate
            palette={
                <div className="h-full flex flex-col justify-around">
                    <div className="flex flex-col gap-y-6 w-full justify-center items-center border-2 border-[#d5af3c] p-4 rounded-3xl shadow-2xl">
                        {/* {devMode && (
                            <button
                                onClick={() => setUseShuffled((prev) => !prev)}
                                className="mb-4 px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-700"
                            >
                                Toggle Colours ({useShuffled ? "Shuffled" : "Original"})
                            </button>
                        )} */}

                        <SwatchesColourPicker
                            colors={finalFlattened}
                            onColorSelect={handleColorSelect}
                            swatchSize={25}
                            gridSize={{ rows: 10, cols: 12 }}
                            selectedColor={selectedColor}
                        />
                        <ColourTester color={color} />
                    </div>
                    <br />
                    <Paragraph className="text-center">
                        {locale === "en" ? "After colouring all 12 petals you may press “Reveal” to learn about harmony achieved or “Download” your colouring." : "После того как вы раскрасите все 12 лепестков, вы можете нажать «Показать», чтобы узнать, достигнута ли гармония, или «Скачать», чтобы сохранить свою раскраску."}
                    </Paragraph>
                </div>
            }
            symbol={<DesignCanvas color={color} />}
        />
    );
}
