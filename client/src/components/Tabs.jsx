import { useState } from "react";

export default function Tabs({ items }) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="w-full flex flex-col mt-4">
            {/* Tab Buttons */}
            <div className="relative z-10 px-4 sm:px-6 md:px-12 overflow-x-auto scrollbar-hide">
                <div className="flex gap-4 sm:gap-6 md:gap-8 flex-nowrap w-max">
                    {items.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`px-3 sm:px-4 py-2 text-sm sm:text-base font-semibold rounded-t-lg transition-all duration-300 
                                whitespace-nowrap
                                ${index === activeIndex
                                    ? "bg-white text-[#3300cc] border border-white"
                                    : "text-[#3300cc] border border-white hover:bg-white"
                                }
                            `}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Box */}
            <div className="relative w-full bg-white text-[#3300cc] rounded-3xl p-6 shadow-lg -mt-1 overflow-hidden">
                {/* Gradient Layer (under content) */}
                <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#fff2cc] to-white z-0 pointer-events-none" />

                {/* Content Layer */}
                <div className="relative z-10">
                    {items[activeIndex].content}
                </div>
            </div>

        </div>
    );
}
