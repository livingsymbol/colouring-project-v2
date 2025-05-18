import { useState } from "react";

export default function Tabs({ items }) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="w-full flex flex-col mt-4">
            {/* Tab Buttons */}
            <div className="flex flex-wrap items-start gap-8 relative z-10 pl-12">
                {items.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`px-4 py-2 font-semibold underline rounded-t-lg transition-all duration-300 hover:bg-white
              ${index === activeIndex
                                ? "bg-white text-[#3300cc] border border-white"
                                : "text-[#3300cc] border border-white"
                            }
            `}
                    >
                        {item.label}
                    </button>
                ))}
            </div>

            {/* Content Box */}
            <div className="relative w-full bg-white text-[#3300cc] rounded-xl p-6 shadow-lg -mt-1 overflow-hidden">
                {/* Content */}
                {items[activeIndex].content}

                {/* Gradient at bottom */}
                <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#fff2cc] to-white pointer-events-none" />
            </div>
        </div>
    );
}
    