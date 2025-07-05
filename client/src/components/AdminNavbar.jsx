import { useNavigate, NavLink, useLocation } from 'react-router-dom';

export default function AdminNavbar() {
    const navigate = useNavigate();
    const location = useLocation();

    const navLinkStyle = ({ isActive }) =>
        `text-md lg:text-lg xl:text-2xl text-center font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] transition-colors ${isActive ? "text-[#a58c3a]" : "text-white hover:text-[#a58c3a]"
        }`;

    return (
        <div className="w-full bg-[#3300cc] py-4 px-6 shadow-lg flex justify-between items-center mb-6">
            {/* Left icons */}
            <div className="flex items-center space-x-4">
                <img
                    className="h-12 lg:h-16 w-12 lg:w-16 cursor-pointer"
                    onClick={() => navigate("/")}
                    src="/images/icon1.png"
                    alt="Icon 1"
                />
                <img
                    className="h-12 lg:h-16 w-12 lg:w-16 cursor-pointer"
                    onClick={() => navigate("/")}
                    src="/images/icon2.png"
                    alt="Icon 2"
                />
            </div>

            {/* Right nav links */}
            <div className="flex items-center space-x-6">
                <NavLink to="/admin/dashboard" className={navLinkStyle}>
                    Dashboard
                </NavLink>
                <NavLink to="/admin/edit" className={navLinkStyle}>
                    Edit Page
                </NavLink>
                <button
                    onClick={() => {
                        localStorage.clear();
                        navigate('/admin/login');
                    }}
                    className="text-md lg:text-lg xl:text-2xl text-center hover:text-red-500 font-semibold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]"
                >
                    Logout
                </button>
            </div>
        </div>
    );
}
