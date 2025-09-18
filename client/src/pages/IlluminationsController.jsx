export default function IlluminationsController({ count, setCount, colorIndex, setColorIndex }) {
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

                /* Thumb styling for Chrome, Safari, Edge */
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

                /* Thumb styling for Firefox */
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

            <div className="mb-4 p-4 flex gap-x-4 items-start justify-between border-2 rounded-xl border-[#d5af3c] bg-white">
                <span className="text-xl text-[#d5af3c]">
                    Symbol Illumination
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
                        <span className="text-sm text-black">Silver</span>
                        <span className="text-sm text-black">None</span>
                        <span className="text-sm text-black">Gold</span>
                    </div>
                </div>
            </div>

            <div className="mb-4 p-4 flex gap-x-4 items-start justify-between border-2 rounded-xl border-[#d5af3c] bg-white">
                <span className="text-xl text-[#d5af3c]">
                    Illumination Density
                </span>
                <div className="flex flex-col items-center">
                    <input
                        type="range"
                        min="5"
                        max="50"
                        value={count}
                        onChange={(e) => setCount(Number(e.target.value))}
                    />
                    <div className="flex justify-between w-full">
                        <span className="text-sm text-black">Min</span>
                        <span className="text-sm text-black">Max</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
