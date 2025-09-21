import { useLocale } from "../context/LocaleContext"

export default function IlluminationsController({ count, setCount, colorIndex, setColorIndex }) {
    const labels = {
        en: {
            illumination: "Symbol Illumination",
            silver: "Silver",
            none: "None",
            gold: "Gold",
            density: "Illumination Density",
            min: "Min",
            max: "Max",
        },
        ru: {
            illumination: "Подсветка символа",
            silver: "Серебряный",
            none: "Начало",
            gold: "Золотой",
            density: "Интенсивность освещения",
            min: "Мин",
            max: "Макс",
        }
    };
    const { locale } = useLocale();
    const t = labels[locale];

    return (
        <div className="mt-8 space-y-4">
            <style jsx>{`
                input[type="range"] {
                    -webkit-appearance: none;
                    width: 100%;
                    height: 6px;
                    border-radius: 5px;
                    background: #d5af3c;
                    outline: none;
                }
                input[type="range"]::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: #000;
                    cursor: pointer;
                    border: 2px solid white;
                    box-shadow: 0 0 2px rgba(0,0,0,0.5);
                }
                input[type="range"]::-moz-range-thumb {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: #d5af3c;
                    cursor: pointer;
                    border: 2px solid white;
                    box-shadow: 0 0 2px rgba(0,0,0,0.5);
                }
            `}</style>

            {/* Illumination selector */}
            <div className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between border-2 rounded-xl border-[#d5af3c] bg-white gap-3">
                <span className="text-lg sm:text-xl text-[#d5af3c] whitespace-nowrap">
                    {t.illumination}
                </span>
                <div className="flex flex-col items-center w-full max-w-sm">
                    <input
                        type="range"
                        min="0"
                        max={2}
                        step="1"
                        value={colorIndex}
                        onChange={(e) => setColorIndex(Number(e.target.value))}
                    />
                    <div className="flex justify-between w-full text-xs sm:text-sm text-black pointer-events-none">
                        <span>{t.silver}</span>
                        <span>{t.none}</span>
                        <span>{t.gold}</span>
                    </div>
                </div>
            </div>

            {/* Density selector */}
            <div className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between border-2 rounded-xl border-[#d5af3c] bg-white gap-3">
                <span className="text-lg sm:text-xl text-[#d5af3c] whitespace-nowrap">
                    {t.density}
                </span>
                <div className="flex flex-col items-center w-full max-w-sm">
                    <input
                        type="range"
                        min="1000"
                        max="5000"
                        value={count}
                        onChange={(e) => setCount(Number(e.target.value))}
                    />
                    <div className="flex justify-between w-full text-xs sm:text-sm text-black pointer-events-none">
                        <span>{t.min}</span>
                        <span>{t.max}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
