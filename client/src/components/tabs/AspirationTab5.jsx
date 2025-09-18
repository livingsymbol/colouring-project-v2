import { useState } from "react";
import AspirationTabTemplate from "../AspirationTabTemplate";
import ColourTester from "../ColourTester";
import DesignCanvas from "../DesignCanvas";
import Paragraph from "../Paragraph";
import RGBwhite from "../RGBwhite";
import IlluminationsController from "../../pages/IlluminationsController";

export default function AspirationTab5() {
    const colorOptions = ["silver", "none", "gold"];
    const [count, setCount] = useState(10);
    const [colorIndex, setColorIndex] = useState(1);

    const [color, setColor] = useState("#fff");
    const [selectedColor, setSelectedColor] = useState(null);

    const handleColorSelect = (color) => {
        setColor(color);
        setSelectedColor(color);
    };

    return (
        <AspirationTabTemplate palette=
            {<div className="h-full flex flex-col justify-around">
                <div className="flex flex-col gap-y-6 w-full justify-center items-center border-2 border-[#d5af3c] p-4 rounded-3xl shadow-2xl">
                    <div className="w-fit flex flex-col items-center justify-center gap-y-1 bg-white rounded-lg">
                        <RGBwhite onColorSelect={handleColorSelect} />

                    </div>
                    <ColourTester color={color} />
                </div>
                <IlluminationsController count={count} setCount={setCount} colorIndex={colorIndex} setColorIndex={setColorIndex} />
                <Paragraph className="text-center">After colouring all 12 petals you may “Download” your colouring.</Paragraph>
            </div>}
            symbol={<DesignCanvas color={color} showDesc={true} isColouring5={true} sparkleColor={colorOptions[colorIndex]} count={count} />} />
    );
}

