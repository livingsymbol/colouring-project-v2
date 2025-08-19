import { useState } from "react";
import AspirationTabTemplate from "../AspirationTabTemplate";
import SwatchesColourPicker from "../SwatchesColourPicker";
import ColourTester from "../ColourTester";
import DesignCanvas from "../DesignCanvas";
import Paragraph from "../Paragraph";
import { shuffledColours2 } from "../../utils/scoring";

export default function AspirationTab5() {
    const [color, setColor] = useState("#fff");
    const [selectedColor, setSelectedColor] = useState(null);

    const handleColorSelect = (color) => {
        setColor(color);
        setSelectedColor(color);
    };

    return (
        <AspirationTabTemplate palette=
            {<div className="h-full flex flex-col justify-around">
                <div className="flex flex-col gap-y-6 w-full justify-center items-center border-2 border-[#a58c3a] p-4 rounded-3xl shadow-2xl">
                    <div className="w-fit flex flex-col items-center justify-center gap-y-1 bg-white rounded-lg">
                        <SwatchesColourPicker
                            colors={shuffledColours2}
                            onColorSelect={handleColorSelect}
                            swatchSize={20}
                            gridSize={{ rows: 10, cols: 24 }}
                            selectedColor={selectedColor}
                        />
                    </div>
                    <ColourTester color={color} />

                </div>
                <Paragraph>After colouring all 12 petals you may “Download” your colouring.</Paragraph>
            </div>}
            symbol={<DesignCanvas color={color} showDesc={true} />} />
    );
}

