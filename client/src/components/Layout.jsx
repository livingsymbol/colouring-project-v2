import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="min-h-screen gradient-background">
            <Navbar />
            <main className="relative z-10 mt-12 p-8">
                <Outlet />
            </main>
        </div>
    );
}
