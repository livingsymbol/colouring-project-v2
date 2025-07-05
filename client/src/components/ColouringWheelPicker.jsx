import RGBwhite from "./RGBwhite";
import RGBblack from "./RGBblack";
import RYBwhite from "./RYBwhite";
import RYBblack from "./RYBblack";

export default function ColouringWheelPicker({ isRYB, onColorSelect }) {
    return (
        <div className="w-full space-y-4">
            <h1 className="border-2 p-4 border-[#a58c3a] rounded-lg font-bold text-[#a58c3a] text-2xl text-center">
                {isRYB ? "RYB" : "RGB"}
            </h1>
            <div className="flex gap-2">
                <div className="space-y-4">
                    <h1 className="border-2 p-4 border-[#a58c3a] rounded-lg font-bold text-[#a58c3a] text-2xl text-center">Tinted Colour</h1>
                    <div>{isRYB ? <RYBwhite  onColorSelect={onColorSelect} /> : <RGBwhite onColorSelect={onColorSelect} />}</div>
                </div>
                <div className="space-y-4">
                    <h1 className="border-2 p-4 border-[#a58c3a] rounded-lg font-bold text-[#a58c3a] text-2xl text-center">Shaded Colour</h1>
                    <div>{isRYB ? <RYBblack onColorSelect={onColorSelect} /> : <RGBblack onColorSelect={onColorSelect} />}</div>
                </div>
            </div>
        </div>
    )
}
