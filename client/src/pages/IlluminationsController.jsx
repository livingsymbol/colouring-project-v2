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
        <div className="mt-8">
            <style jsx>{`
                input[type="range"] {
                    -webkit-appearance: none;
                    width: 250px;
                    height: 6px;
                    border-radius: 5px;
                    background: #d5af3c;
                    outline: none;
                }
                input[type="range"]::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    background: #000;
                    cursor: pointer;
                    border: 2px solid white;
                    box-shadow: 0 0 2px rgba(0,0,0,0.5);
                }
                input[type="range"]::-moz-range-thumb {
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    background: #d5af3c;
                    cursor: pointer;
                    border: 2px solid white;
                    box-shadow: 0 0 2px rgba(0,0,0,0.5);
                }
            `}</style>

            <div className="mb-4 p-4 flex items-start justify-between border-2 rounded-xl border-[#d5af3c] bg-white">
                <span className="text-xl text-[#d5af3c]">
                    {t.illumination}
                </span>
                <div className="flex flex-col items-center">
                    <input
                        type="range"
                        min="0"
                        max={2}
                        step="1"
                        value={colorIndex}
                        onChange={(e) => setColorIndex(Number(e.target.value))}
                    />
                    <div className="flex justify-between w-full">
                        <span className="text-sm text-black">{t.silver}</span>
                        <span className="text-sm text-black">{t.none}</span>
                        <span className="text-sm text-black">{t.gold}</span>
                    </div>
                </div>
            </div>

            <div className="mb-4 p-4 flex items-start justify-between border-2 rounded-xl border-[#d5af3c] bg-white">
                <span className="text-xl text-[#d5af3c]">
                    {t.density}
                </span>
                <div className="flex flex-col items-center">
                    <input
                        type="range"
                        min="100"
                        max="1000"
                        value={count}
                        onChange={(e) => setCount(Number(e.target.value))}
                    />
                    <div className="flex justify-between w-full">
                        <span className="text-sm text-black">{t.min}</span>
                        <span className="text-sm text-black">{t.max}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
