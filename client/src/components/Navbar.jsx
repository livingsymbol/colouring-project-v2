import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const navItems = [
    { name: "Home", path: "/home" },
    { name: "Colours", path: "/colours" },
    { name: "Finding Harmony", path: "/finding-harmony" },
    { name: "Aspiration at Work", path: "/aspiration-at-work" },
    { name: "Gallery", path: "/gallery" },
    { name: "Forum & your Colourings", path: "/forum-and-colouring" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <nav className="bg-[#3300cc]">
                <div className="mx-auto px-2 md:px-4">
                    <div className="flex justify-between h-20 items-center">
                        {/* Left icons */}
                        <div className="flex items-center space-x-4">
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
                        <div className="hidden md:flex md:space-x-4 lg:space-x-8 xl:space-x-12">
                            {navItems.map(({ name, path }) => (
                                <NavLink
                                    key={name}
                                    to={path}
                                    className={({ isActive }) =>
                                        `text-md lg:text-lg xl:text-2xl text-center hover:text-[#a58c3a] font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] ${isActive ? "text-[#a58c3a]" : "text-white"
                                        }`
                                    }
                                >
                                    {name}
                                </NavLink>
                            ))}
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                aria-controls="mobile-menu"
                                aria-expanded={isOpen}
                                className="text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#3300cc] focus:ring-[#00d5ff]"
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
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
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
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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
                        className="md:hidden absolute top-20 left-0 w-full bg-[#3300cc] z-20 px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-md"
                    >
                        {navItems.map(({ name, path }) => (
                            <NavLink
                                key={name}
                                to={path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded-md font-semibold hover:text-[#a58c3a] ${isActive ? "text-[#a58c3a]" : "text-white"
                                    }`
                                }
                            >
                                {name}
                            </NavLink>
                        ))}
                    </div>
                )}

            </nav>

            {/* Full width bottom border with gradient */}
            <div
                style={{
                    height: "16px",
                    width: "100vw",
                    position: "relative",
                    left: 0,
                    right: 0,
                    background: "linear-gradient(to bottom, #3300cc 0%, #00d5ff 50%, #3300cc 100%)",
                    marginTop: "-8px", // to sit flush under nav
                    zIndex: 10,
                }}
            />
        </>
    );
}
