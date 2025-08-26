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

    // Step 1: Split into 3 equal row-wise parts
    const third = Math.floor(numRows / 3);
    const part1 = colours2.slice(0, third);
    const part2 = colours2.slice(third, 2 * third);
    const part3 = colours2.slice(2 * third);

    // Step 2: Flatten each part column-wise
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

    const flattened1 = flattenColumnWise(part1);
    const flattened2 = flattenColumnWise(part2);
    const flattened3 = flattenColumnWise(part3);

    // Step 3: Concatenate all 3 arrays
    const finalFlattened = flattened1.concat(flattened2, flattened3);


    return (
        <AspirationTabTemplate palette=
            {<div className="h-full flex flex-col justify-around">
                <div className="flex flex-col gap-y-6 w-full justify-center items-center border-2 border-[#d5af3c] p-4 rounded-3xl shadow-2xl">
                    <div className="w-fit flex flex-col items-center justify-center gap-y-1 bg-white rounded-lg">
                        <SwatchesColourPicker
                            colors={finalFlattened}
                            onColorSelect={handleColorSelect}
                            swatchSize={25}
                            gridSize={{ rows: 15, cols: 16 }}
                            selectedColor={selectedColor} // Pass the selected color to SwatchesColourPicker
                        />
                    </div>
                    <ColourTester color={color} />

                </div>
                <Paragraph>After colouring all 12 petals you may press “Reveal” to learn about harmony achieved or “Download” your colouring.
                </Paragraph>
            </div>}
            symbol={<DesignCanvas color={color} isColours1={false} />} />
    );
}

