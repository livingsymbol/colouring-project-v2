import { Link } from "react-router-dom";
import { useLocale } from "../context/LocaleContext";

export default function PdfPageButton({ name, page, children }) {
    const { locale } = useLocale();
    return (
        <div className={window.location.pathname === '/library'
            ? "w-full flex"
            : "w-full flex justify-center"}>
            <Link
                to={`/view-pdf?name=${name}&page=${page ?? 1}`}
                target="_blank"
                rel="noopener noreferrer"
                className={
                    window.location.pathname === '/library'
                        ? "underline hover:text-blue-500"
                        : "mt-12 px-4 py-1 md:px-8 text-md md:text-lg font-semibold text-white bg-[#d5af3c] rounded-lg duration-100 hover:bg-[#d5af3c] hover:text-white shadow-2xl"
                }
            >
                {children || (locale === "en" ? "Click here for more information" : "Нажмите здесь, чтобы узнать больше")}
            </Link>
        </div>
    );
}
