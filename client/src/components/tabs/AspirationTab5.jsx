import { useState, useEffect } from "react";
import AspirationTabTemplate from "../AspirationTabTemplate";
import ColourTester from "../ColourTester";
import DesignCanvas from "../DesignCanvas";
import Paragraph from "../Paragraph";
import RGBwhite from "../RGBwhite";
import IlluminationsController from "../../pages/IlluminationsController";
import { useLocale } from "../../context/LocaleContext";

export default function AspirationTab5({ size = 300 }) {
    const colorOptions = ["silver", "none", "gold"];
    const [count, setCount] = useState(1000);
    const [colorIndex, setColorIndex] = useState(1);

    const [color, setColor] = useState("#fff");
    const [selectedColor, setSelectedColor] = useState(null);

    const [wheelSize, setWheelSize] = useState(size);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 400) {
                setWheelSize(250);
            } else if (width < 1000) {
                setWheelSize(300);
            } else if (width < 1400) {
                setWheelSize(220);
            } else {
                setWheelSize(300);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [size]);

    const { locale } = useLocale();

    const handleColorSelect = (color) => {
        setColor(color);
        setSelectedColor(color);
    };

    return (
        <AspirationTabTemplate
            palette={
                <div className="h-full flex flex-col justify-around">
                    <div className="flex flex-col gap-y-6 w-full justify-center items-center border-2 border-[#d5af3c] p-4 rounded-3xl shadow-2xl">
                        <div className="w-fit flex flex-col items-center justify-center gap-y-1 bg-white rounded-lg">
                            <RGBwhite onColorSelect={handleColorSelect} size={wheelSize} />
                        </div>
                        <ColourTester color={color} />
                    </div>
                    <IlluminationsController
                        count={count}
                        setCount={setCount}
                        colorIndex={colorIndex}
                        setColorIndex={setColorIndex}
                    />
                    <Paragraph className="text-center">
                        {locale === "en"
                            ? "After colouring all 12 petals you may “Download” your colouring."
                            : "После того как вы раскрасите все 12 лепестков, вы можете нажать «Скачать», чтобы сохранить свой вариант символа."}
                    </Paragraph>
                </div>
            }
            symbol={
                <DesignCanvas
                    color={color}
                    showDesc={true}
                    isColouring5={true}
                    sparkleColor={colorOptions[colorIndex]}
                    count={count}
                />
            }
        />
    );
}
