import { useState } from "react";
import AspirationTabTemplate from "../AspirationTabTemplate";
import Colouring2Picker from "../Colouring2Picker";
import ColourTester from "../ColourTester";
import DesignCanvas from "../DesignCanvas";
import Paragraph from "../Paragraph";
import { colours2 } from "../../utils/scoring";

export default function AspirationTab5() {
    const [color, setColor] = useState("#fff");
    const [selectedColor, setSelectedColor] = useState(null);

    const handleColorSelect = (color) => {
        setColor(color);
        setSelectedColor(color);
    };

    // 1. Flatten the matrix
    let flat = colours2.flat();

    // 2. Shuffle the array using Fisher-Yates
    for (let i = flat.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [flat[i], flat[j]] = [flat[j], flat[i]];
    }

    // 3. Reshape into 24x5
    let randomizedColours2 = [];
    for (let i = 0; i < 24; i++) {
        randomizedColours2.push(flat.slice(i * 10, i * 10 + 10));
    }


    return (
        <AspirationTabTemplate palette=
            {<div className="h-full flex flex-col justify-around">
                <div className="flex flex-col gap-y-6 w-full justify-center items-center border-2 border-[#c7b73a] p-4 rounded-3xl shadow-2xl">
                    <div className="w-fit flex flex-col items-center justify-center gap-y-1 bg-white rounded-lg">
                        <Colouring2Picker
                            colors={randomizedColours2}
                            onColorSelect={handleColorSelect}
                            swatchSize={20}
                            gridSize={{ rows: 10, cols: 24 }}
                            selectedColor={selectedColor} // Pass the selected color to Colouring2Picker
                        />
                    </div>
                    <ColourTester color={color} />

                </div>
                <Paragraph>After colouring all 12 petals you may press “Reveal” to learn about harmony achieved or “Download” your colouring.
                </Paragraph>
            </div>}
            symbol={<DesignCanvas showDesc={true} color={color} />} />
    );
}

