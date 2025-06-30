import { useState } from "react";
import SwatchesPicker from "./SwatchesPicker";
import ColourTester from "./ColourTester";
import DesignCanvas from "./DesignCanvas";
import { colours1 } from "../utils/scoring";

const ColouringComponent1 = () => {
    const [color, setColor] = useState("#fff");
    const [selectedColor, setSelectedColor] = useState(null);

    const handleColorSelect = (color) => {
        setColor(color);
        setSelectedColor(color);
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row gap-y-6 w-full justify-center items-center">
            <ColourTester color={color} />
            <DesignCanvas color={color} />
            <div className="order-1 lg:order-3 w-fit flex items-center justify-center p-2 bg-white rounded-lg">
                <SwatchesPicker
                    colors={colours1}
                    onColorSelect={handleColorSelect}
                    swatchSize={25}
                    gridSize={{ rows: 6, cols: 20 }}
                    selectedColor={selectedColor} // Pass the selected color to SwatchesPicker
                />
            </div>
        </div>
    );
};

export default ColouringComponent1;

