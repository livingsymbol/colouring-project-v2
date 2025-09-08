import RichTextRenderer from "../RichTextRenderer";
import Paragraph from '../Paragraph';
import PdfPageButton from "../PdfPageButton";

export default function FindingTab2({ content }) {
    return <div className="w-full">
        {/* <RichTextRenderer content={content} /> */}
        <>
            <Paragraph>
                By mixing primary colours, secondary colours are created. By mixing secondary colours, tertiary colours are created. Colours will differ based on what colour model we are using, as per below.
            </Paragraph>
            <br />
            <div className="mx-auto min-w-[200px] max-w-[800px] flex justify-center items-center gap-4">
                <img src="images/ft2.1.png" alt="" className="w-1/2 h-full " />
                <img src="images/ft2.2.png" alt="" className="w-1/2 h-full " />
            </div>
            <PdfPageButton name="living-symbol" page={26} />

        </>
    </div>;
}
