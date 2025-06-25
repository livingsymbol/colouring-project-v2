import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="min-h-screen gradient-background">
            <Navbar />
            <main className="relative z-10 mt-8 md:mt-12 px-1 sm:px-6 md:px-8 py-6 text-justify md:text-left">
                <Outlet />
            </main>
        </div>
    );
}
