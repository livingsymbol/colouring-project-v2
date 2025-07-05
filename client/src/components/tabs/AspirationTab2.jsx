import { useState } from "react";
import AspirationTabTemplate from "../AspirationTabTemplate";
import SwatchesColourPicker from "../SwatchesColourPicker";
import ColourTester from "../ColourTester";
import DesignCanvas from "../DesignCanvas";
import Paragraph from "../Paragraph";
import { colours2 } from "../../utils/scoring";

export default function AspirationTab2() {
    const [color, setColor] = useState("#fff");
    const [selectedColor, setSelectedColor] = useState(null);

    const handleColorSelect = (color) => {
        setColor(color);
        setSelectedColor(color);
    };

    const numRows = colours2.length;
    const numCols = colours2[0].length;

    // Step 1: Split into two equal row-wise halves
    const half = Math.floor(numRows / 2);
    const topHalf = colours2.slice(0, half);
    const bottomHalf = colours2.slice(half);

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

    return (
        <AspirationTabTemplate palette=
            {<div className="h-full flex flex-col justify-around">
                <div className="flex flex-col gap-y-6 w-full justify-center items-center border-2 border-[#a58c3a] p-4 rounded-3xl shadow-2xl">
                    <div className="w-fit flex flex-col items-center justify-center gap-y-1 bg-white rounded-lg">
                        <SwatchesColourPicker
                            colors={finalFlattened}
                            onColorSelect={handleColorSelect}
                            swatchSize={20}
                            gridSize={{ rows: 10, cols: 24 }}
                            selectedColor={selectedColor} // Pass the selected color to SwatchesColourPicker
                        />
                    </div>
                    <ColourTester color={color} />

                </div>
                <Paragraph>After colouring all 12 petals you may press “Reveal” to learn about harmony achieved or “Download” your colouring.
                </Paragraph>
            </div>}
            symbol={<DesignCanvas color={color} />} />
    );
}

