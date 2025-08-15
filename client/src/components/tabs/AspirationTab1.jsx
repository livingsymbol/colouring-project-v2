import { useState, useEffect } from "react";
import AspirationTabTemplate from "../AspirationTabTemplate";
import SwatchesColourPicker from "../SwatchesColourPicker";
import ColourTester from "../ColourTester";
import DesignCanvas from "../DesignCanvas";
import Paragraph from "../Paragraph";
import { colours1 } from "../../utils/scoring";

export default function AspirationTab1() {
    const [color, setColor] = useState("#fff");
    const [selectedColor, setSelectedColor] = useState(null);

    const [devMode, setDevMode] = useState(false); // controls whether dev button is visible
    const [useShuffled, setUseShuffled] = useState(true); // toggles colors source

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

    // Flatten and shuffle
    const flat = colours1.flat();
    const shuffled = [...flat];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // Decide colors based on toggle
    const colorsToShow = useShuffled ? shuffled : colours1;

    return (
        <AspirationTabTemplate
            palette={
                <div className="h-full flex flex-col justify-around">
                    <div className="flex flex-col gap-y-6 w-full justify-center items-center border-2 border-[#a58c3a] p-4 rounded-3xl shadow-2xl">
                        {devMode && (
                            <button
                                onClick={() => setUseShuffled((prev) => !prev)}
                                className="mb-4 px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-700"
                            >
                                Toggle Colours ({useShuffled ? "Shuffled" : "Original"})
                            </button>
                        )}

                        <SwatchesColourPicker
                            colors={colorsToShow}
                            onColorSelect={handleColorSelect}
                            swatchSize={25}
                            gridSize={{ rows: 6, cols: 20 }}
                            selectedColor={selectedColor}
                        />
                        <ColourTester color={color} />
                    </div>

                    <Paragraph>
                        After colouring all 12 petals you may press “Reveal” to learn about harmony achieved or “Download” your colouring.
                    </Paragraph>
                </div>
            }
            symbol={<DesignCanvas color={color} />}
        />
    );
}
