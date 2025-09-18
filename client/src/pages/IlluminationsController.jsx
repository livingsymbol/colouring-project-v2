export default function IlluminationsController({ count, setCount, colorIndex, setColorIndex }) {
    return (
        <div className="mt-8">
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
                        style={{ width: 250 }}
                    />
                    <div className="flex justify-between w-full">
                        <span className="text-sm text-black">Silver</span>
                        <span className="text-sm text-black">Gold</span>
                    </div>
                </div>
            </div>
            <div className="mb-4 p-4 flex gap-x-4 items-start justify-between border-2 rounded-xl border-[#d5af3c] bg-white">
                <span className="text-xl text-[#d5af3c]">
                    Illumination Intensity
                </span>
                <div className="flex flex-col items-center">
                    <input
                        type="range"
                        min="5"
                        max="50"
                        value={count}
                        onChange={(e) => setCount(Number(e.target.value))}
                        style={{ width: 250 }}
                    />
                    <div className="flex justify-between w-full">
                        <span className="text-sm text-black">Min</span>
                        <span className="text-sm text-black">Max</span>
                    </div>
                </div>
            </div>
            {/* 
            <div>
                <Sparkles color={colorOptions[colorIndex]} count={count}>
                    <div className="w-72 h-72 border bg-red-500" />
                </Sparkles>
            </div> */}
        </div>
    );
}
