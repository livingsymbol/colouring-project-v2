//TODO colours2 needs to be filled with colours from new PPT
import { useState } from "react";
import AspirationTabTemplate from "../AspirationTabTemplate";
import Colouring2Picker from "../Colouring1Picker";
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

    const midpoint = Math.floor(colours2.length / 2);

    const part1 = colours2.slice(0, midpoint);
    const part2 = colours2.slice(midpoint);

    return (
        <AspirationTabTemplate palette=
            {<div className="h-full flex flex-col justify-around">
                <div className="flex flex-col gap-y-6 w-full justify-center items-center border-2 border-[#c7b73a] p-4 rounded-3xl shadow-2xl">
                    <div className="w-fit flex flex-col items-center justify-center gap-y-1 bg-white rounded-lg">
                        <Colouring2Picker
                            colors={part1}
                            onColorSelect={handleColorSelect}
                            swatchSize={20}
                            gridSize={{ rows: 5, cols: 24 }}
                            selectedColor={selectedColor} // Pass the selected color to Colouring2Picker
                        />
                        <Colouring2Picker
                            colors={part2}
                            onColorSelect={handleColorSelect}
                            swatchSize={20}
                            gridSize={{ rows: 5, cols: 24 }}
                            selectedColor={selectedColor} // Pass the selected color to Colouring2Picker
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

