import Navbar from "./Navbar";

export default function Layout({ children }) {
    return (
        <div className="min-h-screen gradient-background">
            <Navbar />
            <main className="relative z-10 mt-12 p-8">
                {children}
            </main>
        </div>
    );
}
