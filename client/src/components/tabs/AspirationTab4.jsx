import { useState } from "react";
import AspirationTabTemplate from "../AspirationTabTemplate";
import ColouringWheelPicker from "../ColouringWheelPicker";
import ColourTester from "../ColourTester";
import DesignCanvas from "../DesignCanvas";
import Paragraph from "../Paragraph";
import { useLocale } from "../../context/LocaleContext";

export default function AspirationTab4() {
    const [color, setColor] = useState("#fff");
    const { locale } = useLocale();

    const handleColorSelect = (color) => {
        setColor(color);
    };

    return (
        <AspirationTabTemplate palette=
            {<div className="h-full flex flex-col justify-around">
                <div className="flex flex-col gap-y-6 w-full justify-center items-center border-2 border-[#d5af3c] p-4 rounded-3xl shadow-2xl">
                    <ColouringWheelPicker isRYB={false} onColorSelect={handleColorSelect} />
                    <ColourTester color={color} />
                </div>
                <br />
                <Paragraph className="text-center">{locale === "en" ? "After colouring all 12 petals you may “Save” your colouring." : "После того как вы раскрасите все 12 лепестков, вы можете нажать «Скачать», чтобы сохранить свой вариант символа."}</Paragraph>
            </div>}
            symbol={<DesignCanvas color={color} showDesc={true} />} />
    );
}

