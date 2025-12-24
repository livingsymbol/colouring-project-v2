import { useState, useEffect } from "react";
import AspirationTabTemplate from "../AspirationTabTemplate";
import SwatchesColourPicker from "../SwatchesColourPicker";
import ColourTester from "../ColourTester";
import DesignCanvas from "../DesignCanvas";
import Paragraph from "../Paragraph";
import { colours2 } from "../../utils/scoring";
import Colouring2Picker from "../Colouring2Picker";
import { useLocale } from "../../context/LocaleContext";

// Custom hook for media query
function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);
    
    useEffect(() => {
        const media = window.matchMedia(query);
        const listener = () => setMatches(media.matches);
        
        listener(); // initial check
        media.addEventListener("change", listener);
        
        return () => media.removeEventListener("change", listener);
    }, [query]);
    
    return matches;
}

export default function AspirationTab2() {
    const [color, setColor] = useState("#fff");
    const [selectedColor, setSelectedColor] = useState(null);
    const { locale } = useLocale();

    const isSmall = useMediaQuery("(max-width: 640px)"); // Tailwind `sm` breakpoint = 640px

    const handleColorSelect = (color) => {
        setColor(color);
        setSelectedColor(color);
    };

    // Split into N equal row-wise parts
    function splitArray(array, parts) {
        const chunkSize = Math.floor(array.length / parts);
        return Array.from({ length: parts }, (_, i) =>
            array.slice(i * chunkSize, i === parts - 1 ? undefined : (i + 1) * chunkSize)
        );
    }

    // Flatten each part column-wise
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

    // Decide parts based on screen size
    const parts = splitArray(colours2, isSmall ? 6 : 3);
    const flattenedParts = parts.map(flattenColumnWise);
    const finalFlattened = flattenedParts.flat();

    // Grid settings
    const gridSize = isSmall
        ? { rows: 30, cols: 8 }
        : { rows: 15, cols: 16 };

    const swatchSize = isSmall ? 23 : 30;

    return (
        <AspirationTabTemplate
            palette={
                <div className="h-full flex flex-col justify-around">
                    <div className="flex flex-col gap-y-6 w-full justify-center items-center border-2 border-[#d5af3c] p-4 rounded-3xl shadow-2xl">
                        <div className="w-fit flex flex-col items-center justify-center gap-y-1 bg-white rounded-lg">
                            <SwatchesColourPicker
                                colors={finalFlattened}
                                onColorSelect={handleColorSelect}
                                swatchSize={swatchSize}
                                gridSize={gridSize}
                                selectedColor={selectedColor}
                            />
                        </div>
                        <ColourTester color={color} />
                    </div>
                    <br />
                    <Paragraph className="text-center">
                        {locale === "en" ? "After colouring all 12 petals you may press “Reveal” to learn about harmony achieved or “Download” your colouring." : "После того как вы раскрасите все 12 лепестков, вы можете нажать «Показать», чтобы узнать, достигнута ли гармония, или «Скачать», чтобы сохранить свою раскраску."}
                    </Paragraph>
                </div>
            }
            symbol={<DesignCanvas color={color} isColours1={false} />}
        />
    );
}
