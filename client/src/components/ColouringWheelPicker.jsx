import RGBwhite from "./RGBwhite";
import RGBblack from "./RGBblack";
import RYBwhite from "./RYBwhite";
import RYBblack from "./RYBblack";
import { useLocale } from "../context/LocaleContext";

export default function ColouringWheelPicker({ isRYB, onColorSelect }) {
    const { locale } = useLocale();
    
    return (
        <div className="w-full space-y-6">
            {/* Heading */}
            <h1 className="border-2 py-4 border-[#d5af3c] rounded-lg font-bold text-[#d5af3c] text-xl sm:text-2xl text-center">
                {isRYB ? "RYB" : "RGB"}
            </h1>

            {/* Wheels */}
            <div className="flex flex-col md:flex-row gap-y-6 md:gap-y-0 md:gap-x-6">
                {/* Tinted */}
                <div className="w-full space-y-4">
                    <h1 className="border-2 py-3 border-[#d5af3c] rounded-lg font-bold text-[#d5af3c] text-lg text-center">
                        {locale === "en" ? "Tinted Colour" : "Светлые тона"}
                    </h1>
                    <div className="w-full flex justify-center">
                        {isRYB ? (
                            <RYBwhite onColorSelect={onColorSelect} />
                        ) : (
                            <RGBwhite onColorSelect={onColorSelect} />
                        )}
                    </div>
                </div>

                {/* Shaded */}
                <div className="w-full space-y-4">
                    <h1 className="border-2 py-3 border-[#d5af3c] rounded-lg font-bold text-[#d5af3c] text-lg text-center">
                        {locale === "en" ? "Shaded Colour" : "Тёмные оттенки"}
                    </h1>
                    <div className="w-full flex justify-center">
                        {isRYB ? (
                            <RYBblack onColorSelect={onColorSelect} />
                        ) : (
                            <RGBblack onColorSelect={onColorSelect} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
