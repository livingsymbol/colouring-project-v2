import RichTextRenderer from "../RichTextRenderer";
import Paragraph from '../Paragraph';
import PdfPageButton from "../PdfPageButton";

export default function FindingTab4({ content }) {
    return <div className="w-full">
        {/* <RichTextRenderer content={content} /> */}
        <>
            <Paragraph>
                Shades, tints and tones are variations of hues, i.e. variations of colours on the colour wheel. Once you get to the colouring practice under the “Aspiration at work” tab, careful consideration is needed when selecting colours as well as when considering shades and tints of these colours relative to one another.
            </Paragraph>
            <br />
            <img src="images/ft3.1.png" alt="" />
            <PdfPageButton name="living-symbol" page={28} />

        </>
    </div>;
}
