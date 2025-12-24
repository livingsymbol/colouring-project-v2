import { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Tabs({ items }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const location = window.location.pathname;
    const tabRefs = useRef([]);
    const containerRef = useRef(null);

    const scrollTabIntoView = (index) => {
        const tab = tabRefs.current[index];
        const container = containerRef.current;

        if (tab && container) {
            const marginLeft = 16;
            const scrollLeft = tab.offsetLeft - container.offsetLeft - marginLeft;

            container.scrollTo({
                left: scrollLeft,
                behavior: "smooth",
            });
        }
    };

    const scrollByAmount = (amount) => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: amount, behavior: "smooth" });
        }
    };

    useEffect(() => {
        const savedRoute = localStorage.getItem("tabRoute");
        const savedIndex = localStorage.getItem("tabIndex");

        if (savedRoute === location && savedIndex !== null) {
            const index = Number(savedIndex);
            setActiveIndex(index);

            setTimeout(() => {
                scrollTabIntoView(index);
            }, 100);
        } else {
            setActiveIndex(0);
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
        scrollTabIntoView(index);

        if (location === "/aspiration-at-work") {
            localStorage.removeItem("colourArray");
        }
    };

    return (
        <div className="w-full flex flex-col">
            {/* Tab Buttons */}
            <div className="relative flex items-center ml-8">
                {/* Left Fade */}
                <div className="absolute left-0 top-1 bottom-0 w-12 bg-gradient-to-r to-transparent pointer-events-none md:hidden z-20" />

                {/* Left Scroll Button */}
                <button
                    onClick={() => scrollByAmount(-150)}
                    className="absolute left-1 z-30 bg-white shadow-md rounded-full p-1 sm:p-2 md:hidden"
                >
                    <ChevronLeft size={20} />
                </button>

                {/* Tab Container */}
                <div
                    ref={containerRef}
                    className="relative px-10 sm:px-6 md:px-12 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
                >
                    <div className="flex gap-4 sm:gap-6 md:gap-8 flex-nowrap w-max">
                        {items.map((item, index) => (
                            <button
                                key={index}
                                ref={(el) => (tabRefs.current[index] = el)}
                                onClick={() => handleClick(index)}
                                className={`snap-start px-2 py-2 w-44 text-md sm:text-base font-semibold rounded-t-2xl transition-all duration-300 
                                border-t-2 border-x-2 border-black
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

                {/* Right Fade */}
                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l to-transparent pointer-events-none md:hidden z-20" />

                {/* Right Scroll Button */}
                <button
                    onClick={() => scrollByAmount(150)}
                    className="absolute right-1 z-30 bg-white shadow-md rounded-full p-1 sm:p-2 md:hidden"
                >
                    <ChevronRight size={20} />
                </button>
            </div>

            {/* Content Box */}
            <div className="z-10 relative w-full bg-white text-[#404040] rounded-3xl -mt-[2px] p-6 shadow-lg overflow-hidden border-2 border-black">
                {/* Gradient Layer */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#fff2cc] to-white z-0 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10">{items[activeIndex]?.content}</div>
            </div>
        </div>
    );
}
