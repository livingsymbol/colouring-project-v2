import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { useLocale } from "../context/LocaleContext";

// const items = {
//     en: [
//         { name: <>Home</>, path: "/home" },
//         { name: <>Colours</>, path: "/colours" },
//         { name: <>Finding<br />Harmony</>, path: "/finding-harmony" },
//         { name: <>Aspiration<br />at Work</>, path: "/aspiration-at-work" },
//         { name: <>Gallery</>, path: "/gallery" },
//         { name: <>Library</>, path: "/library" },
//         { name: <>Forum & your<br />Colourings</>, path: "/forum-and-colouring" },
//     ],

//     ru: [
//         { name: <>Главная</>, path: "/home" },
//         { name: <>Цветa</>, path: "/colours" },
//         { name: <>В&nbsp;поисках<br />гармонии</>, path: "/finding-harmony" },
//         { name: <>Стремление<br />в&nbsp;действии</>, path: "/aspiration-at-work" },
//         { name: <>Галерея</>, path: "/gallery" },
//         { name: <>Библиотека</>, path: "/library" },
//         { name: <>Форум и<br />цветовые работы</>, path: "/forum-and-colouring" },
//     ],
// };

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const { locale, switchLocale } = useLocale();

    const [navItems, setNavItems] = useState({ en: [], ru: [] });

    useEffect(() => {
        const fetchNavItems = async () => {
            try {
                const res = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/page/slugs-and-titles`
                );

                const en = [];
                const ru = [];

                res.data.forEach(({ slug, title }) => {
                    const match = title.match(/^(.*?)\s*\((.*?)\)$/);

                    const enTitle = match ? match[1] : title;
                    const ruTitle = match ? match[2] : title;

                    const path = slug;

                    en.push({
                        name: enTitle,
                        path,
                    });

                    ru.push({
                        name: ruTitle,
                        path,
                    });
                });

                setNavItems({ en, ru });
            } catch (err) {
                console.error("Failed to load navigation", err);
            }
        };

        fetchNavItems();
    }, []);

    const currentNavItems = navItems[locale] || [];

    return (
        <>
            <nav className="bg-[#979bca]">
                <div className="mx-auto px-2 md:px-4">
                    <div className="flex justify-between h-20 items-center">
                        {/* Left icons */}
                        <div className="flex items-center space-x-4 shrink-0">
                            <img
                                className="h-12 lg:h-16 w-12 lg:w-16 cursor-pointer"
                                onClick={() => navigate("/")}
                                src="/images/icon1.png"
                            />
                            <img
                                className="h-12 lg:h-16 w-12 lg:w-16 cursor-pointer"
                                onClick={() => navigate("/")}
                                src="/images/icon2.png"
                            />
                        </div>

                        {/* Desktop menu */}
                        <div className="hidden md:flex md:space-x-4 lg:space-x-8">
                            {currentNavItems.map(({ name, path }) => (
                                <NavLink
                                    key={path}
                                    to={path}
                                    className={({ isActive }) =>
                                        `
                                        text-center 
                                        px-1
                                        text-xs sm:text-sm md:text-sm lg:text-base xl:text-xl
                                        font-semibold
                                        hover:text-[#d2c460]
                                        drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]
                                        ${isActive ? "text-[#d2c460]" : "text-white"}
                                        `
                                    }
                                >
                                    {name}
                                </NavLink>
                            ))}
                        </div>

                        {/* Language buttons (Desktop) */}
                        <div className="hidden md:flex items-center space-x-2 shrink-0">
                            <button
                                onClick={() => switchLocale("en")}
                                className={`px-2 py-1 font-semibold ${locale === "en" ? "text-[#d2c460]" : "text-white"
                                    }`}
                            >
                                EN
                            </button>
                            <span className="text-white">|</span>
                            <button
                                onClick={() => switchLocale("ru")}
                                className={`px-2 py-1 font-semibold ${locale === "ru" ? "text-[#d2c460]" : "text-white"
                                    }`}
                            >
                                RU
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                aria-controls="mobile-menu"
                                aria-expanded={isOpen}
                                className="text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#404040] focus:ring-[#00d5ff]"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="h-8 w-8"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="h-8 w-8"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                {isOpen && (
                    <div
                        id="mobile-menu"
                        className="md:hidden absolute top-20 left-0 w-full bg-[#404040] z-20 px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-md"
                    >
                        {currentNavItems.map(({ name, path }) => (
                            <NavLink
                                key={path}
                                to={path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded-md font-semibold hover:text-[#d2c460] ${isActive ? "text-[#d2c460]" : "text-white"
                                    }`
                                }
                            >
                                {name}
                            </NavLink>
                        ))}

                        {/* Language toggle in mobile menu */}
                        <div className="flex justify-center space-x-2 pt-3">
                            <button
                                onClick={() => {
                                    switchLocale("en");
                                    setIsOpen(false);
                                }}
                                className={`px-2 py-1 font-semibold ${locale === "en" ? "text-[#d2c460]" : "text-white"
                                    }`}
                            >
                                EN
                            </button>
                            <span className="text-white">|</span>
                            <button
                                onClick={() => {
                                    switchLocale("ru");
                                    setIsOpen(false);
                                }}
                                className={`px-2 py-1 font-semibold ${locale === "ru" ? "text-[#d2c460]" : "text-white"
                                    }`}
                            >
                                RU
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Full width bottom border with gradient */}
            <div
                style={{
                    height: "20px",
                    width: "100vw",
                    position: "relative",
                    left: 0,
                    right: 0,
                    background: "linear-gradient(to bottom, #979bca 0%, #ffffff 100%)",
                    marginTop: "-8px", // to sit flush under nav
                    zIndex: 10,
                }}
            />
        </>
    );
}
