import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function Tabs({ items }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const location = window.location.pathname;

    useEffect(() => {
        const savedRoute = localStorage.getItem("tabRoute");
        const savedIndex = localStorage.getItem("tabIndex");

        if (savedRoute === location && savedIndex !== null) {
            setActiveIndex(Number(savedIndex));
        } else {
            setActiveIndex(0); // reset for new route
            localStorage.setItem("tabRoute", location);
            localStorage.setItem("tabIndex", "0");
        }
    }, [location]);

    const handleClick = (index) => {
        if (location === "/aspiration-at-work" && index >= 2) {
            try {
                const stored = localStorage.getItem("scorecard");
                const scorecard = stored ? JSON.parse(stored) : [];

                const colouring1 = scorecard.find((s) => s.colouring === 1) || { colouring: 1, score: 0 };
                const colouring2 = scorecard.find((s) => s.colouring === 2) || { colouring: 2, score: 0 };

                if (
                    (!colouring1 && !colouring2) ||
                    (colouring1.score <= 70 && colouring2.score <= 70)
                ) {
                    toast.error("Score above 70% on either Colouring 1 or Colouring 2 to proceed further");
                    return;
                }
            } catch (err) {
                console.error("Error checking scorecard:", err);
                toast.error("Invalid score data.");
                return;
            }
        }

        setActiveIndex(index);
        localStorage.setItem("tabIndex", index.toString());

        if (location === "/aspiration-at-work") {
            localStorage.removeItem("colourArray");
        }
    };

    return (
        <div className="w-full flex flex-col">
            {/* Tab Buttons */}
            <div className="relative px-4 sm:px-6 md:px-12 overflow-x-auto scrollbar-hide">
                <div className="flex gap-4 sm:gap-6 md:gap-8 flex-nowrap w-max">
                    {items.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handleClick(index)}
                            className={`px-2 py-2 w-36 text-md sm:text-base font-semibold rounded-t-2xl transition-all duration-300 
                                whitespace-nowrap border-t-2 border-x-2 border-black
                                ${index === activeIndex
                                    ? "bg-white hover:bg-[#e4e4ef] z-20"
                                    : "bg-[#e4e4ef] hover:bg-white z-0"
                                }
                                ${location === "/home" ? "text-[#c7b73a]" : "text-black"}
                            `}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Box */}
            <div className="z-10 relative w-full bg-white text-[#404040] rounded-3xl -mt-[1.5px] p-6 shadow-lg overflow-hidden border-2 border-black">
                {/* Gradient Layer */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#fff2cc] to-white z-0 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10">{items[activeIndex].content}</div>
            </div>
        </div>
    );
}
