import { useState } from "react";
import AspirationTabTemplate from "../AspirationTabTemplate";
import SwatchesColourPicker from "../SwatchesColourPicker";
import ColourTester from "../ColourTester";
import DesignCanvas from "../DesignCanvas";
import Paragraph from "../Paragraph";
import { colours1 } from "../../utils/scoring";

export default function AspirationTab1() {
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
                    <SwatchesColourPicker
                        colors={colours1}
                        onColorSelect={handleColorSelect}
                        swatchSize={25}
                        gridSize={{ rows: 6, cols: 20 }}
                        selectedColor={selectedColor}
                    />
                    <ColourTester color={color} />

                </div>
                <Paragraph>After colouring all 12 petals you may press “Reveal” to learn about harmony achieved or “Download” your colouring.
                </Paragraph>
            </div>}
            symbol={<DesignCanvas color={color} />} />
    );
}

