import { useState } from "react";

export default function Tabs({ items }) {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className="w-full flex flex-col ">
            {/* Tab Buttons */}
            <div className="relative px-4 sm:px-6 md:px-12 overflow-x-auto scrollbar-hide">
                <div className="flex gap-4 sm:gap-6 md:gap-8 flex-nowrap w-max">
                    {items.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`px-8 sm:px-4 py-2 text-md sm:text-base font-semibold rounded-t-2xl transition-all duration-300 
                                whitespace-nowrap text-[#c7b73a] border-t-2 border-x-2 border-black
                                ${index === activeIndex
                                ? "bg-white hover:bg-[#e4e4ef] z-20"
                                : "bg-[#e4e4ef] hover:bg-white z-0"
                                }
                            `}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Box */}
            <div className="z-10 relative w-full bg-white text-[#404040] rounded-3xl -mt-[1.5px] p-6 shadow-lg overflow-hidden border-2 border-black">
                {/* Gradient Layer (under content) */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#fff2cc] to-white z-0 pointer-events-none" />

                {/* Content Layer */}
                <div className="relative z-10">
                    {items[activeIndex].content}
                </div>
            </div>

        </div>
    );
}
