import RichTextRenderer from "../RichTextRenderer";
import Paragraph from '../Paragraph';
import PdfPageButton from "../PdfPageButton";
import { useLocale } from "../../context/LocaleContext";

export default function FindingTab4({ content }) {
    const { locale } = useLocale();

    return <div className="w-full">
        {/* <RichTextRenderer content={content} /> */}
        {locale === "en" ? <>
            <Paragraph>
                Shades, tints and tones are variations of hues, i.e. variations of colours on the colour wheel. Once you get to the colouring practice under the “Aspiration at work” tab, careful consideration is needed when selecting colours as well as when considering shades and tints of these colours relative to one another.
            </Paragraph>
            <br />
            <img src="images/ft3.1.png" alt="" />
            <PdfPageButton name="living-symbol" page={28} />

        </>
            :
            <>
                <Paragraph>
                    Оттенки, тона и полутона — это вариации тонов, то есть вариации цветов на цветовом круге. Когда вы перейдёте к практике раскрашивания в разделе «Стремление в действии», потребуется внимательный подход при выборе цветов, а также при подборе их оттенков и тонов по отношению друг к другу.

                </Paragraph>
                <br />
                <img src="images/ft3.1ru.png" alt="" />
                <PdfPageButton name="living-symbol" page={28} />

            </>
        }
    </div>;
}
