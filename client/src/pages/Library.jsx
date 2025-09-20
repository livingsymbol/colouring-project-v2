import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import PdfPageButton from '../components/PdfPageButton';
import { useLocale } from '../context/LocaleContext';

// Define translations
const translations = {
    en: {
        heading: "Library",
        paragraph: "Kindly follow the links below for further readings:",
        pdfs: [
            { name: "On-the-Mothers-Symbol", label: "On the Mother’s Symbol" },
            { name: "On-Mothers-Flag-and-Symbol", label: "On the Mother’s flag & Symbol" },
            { name: "On-Sri-Aurobindos-Symbol", label: "On Sri Aurobindo’s Symbol" },
            { name: "The-Science-and-Magic-of-Colour", label: "The Science and Magic of Colour: The Living Symbol of the Mother" },
            { name: "living-symbol", label: "Living Symbol presentation" },
        ],
    },
    ru: {
        heading: "Библиотека",
        paragraph: "Для более подробного ознакомления перейдите по ссылкам ниже.",
        pdfs: [
            { name: "On-the-Mothers-Symbol", label: "О Символе Матери" },
            { name: "On-Mothers-Flag-and-Symbol", label: "О Знамени и Символе Матери" },
            { name: "On-Sri-Aurobindos-Symbol", label: "О Символе Шри Ауробиндо" },
            { name: "The-Science-and-Magic-of-Colour", label: "Наука и магия цвета: Живой символ Матери" },
            { name: "living-symbol", label: "Презентация «Живого символа»" },
        ],
    },
};

export default function Library() {
    const { locale } = useLocale();
    const t = translations[locale];

    return (
        <>
            <Heading>{t.heading}</Heading>
            <div className="w-full flex flex-col mt-24">
                <div className="z-10 relative w-full bg-white text-[#404040] rounded-3xl -mt-[1.5px] p-6 shadow-lg overflow-hidden border-2 border-black">
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#fff2cc] to-white z-0 pointer-events-none" />

                    <div className="relative z-10">
                        <Paragraph>{t.paragraph}</Paragraph>

                        <div className="mt-4 space-y-4">
                            {t.pdfs.map((pdf, i) => (
                                <div key={i}>
                                    <PdfPageButton name={pdf.name}>{pdf.label}</PdfPageButton>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
