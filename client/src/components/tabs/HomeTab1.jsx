import { useLocale } from "../../context/LocaleContext";
import RichTextRenderer from "../RichTextRenderer";

export default function HomeTab1({ content }) {
    const { locale } = useLocale();
    return (
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
            <div className="flex flex-col items-center gap-y-4 sm:w-1/3 w-full">
                <img
                    className="h-16 w-16 lg:h-20 lg:w-20"
                    src="/images/icon1.png"
                    alt="icon"
                />
                <img
                    src="/images/mother.png"
                    alt="The Mother"
                    className="w-3/4 sm:w-full max-w-xs sm:max-w-none object-contain"
                />
                <a className="underline text-xl text-[#b0a132] hover:text-[#b0a132b8]" href="https://themothersguidance.com/the-mother/" target="_blank" rel="noreferrer">
                    {locale === "en" ? "About The Mother" : "О Матери"}
                </a>
            </div>
            <div className="sm:w-2/3 w-full">
                <RichTextRenderer content={content} />
            </div>
        </div>
    );
}
