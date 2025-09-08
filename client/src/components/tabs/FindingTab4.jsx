import { Play } from "lucide-react";
import RichTextRenderer from "../RichTextRenderer";
import Paragraph from '../Paragraph';
import PdfPageButton from "../PdfPageButton";

export default function FindingTab4({ content }) {
    return <div className="w-full">
        {/* <RichTextRenderer content={content} /> */}
        <>
            <Paragraph>
                A closer distinction is needed between colour harmony and the Mother’s symbol coloured harmoniously.
                <br />
                <br />
                Colour harmony may be seen through a variety of lenses.
                In physics we look at light i.e. electromagnetic energy, and visible colour as electromagnetic waves. Colour corresponds to a specific wavelengths with red – lowest vibration, through orange, yellow, green and blue to violet – highest vibration.
                <br />
                <br />
                Physiology of colour vision explores how the eye receives light and how the brain processes it. As several factors, such as lighting conditions, colour blindness etc. influence our colour perception, two people may also see colour harmony differently.
                <br />
                <br />
                Psychology studies how colours influence our moods, emotions and behaviors. As colour perception differs across cultures, so will the perception of colour harmony.
                <br />
                <br />
                Art and design focuses on practical use of colour in creative activities and everyday life. Art trains us to see relationships between form, line, contrast, and balance. Colour theory explains how humans perceive colour, how colours mix, match and contrast as well as what messages colours communicate. Let us not forget about the effect of colour models (RYB, RGB, CMYK) on colour mixing and harmony.
                <br />
                <br />
                Traditional yoga makes us understand that all chakras have vibrational frequencies and start from the base  i.e red – lowest vibration to the top of the head i.e. violet – highest vibration.
                <br />
                <br />
                Additionally, science, particularly physics, helps us understand that colour is not “in” the object but arises from how objects reflect or absorb light. When applied to the Mother’s symbol, this tells us that the colours used are not arbitrary. Their frequency and intensity may correspond to energetic qualities in consciousness - more dense and active at lower frequencies (red, orange) and more refined and subtle at higher ones (blue, violet, white).
                <br />
                <br />
                As per the Mother and Sri Aurobindo’s references to the Mother’s symbol and to the Matrimandir’s the twelve petal rooms, which correspond to the twelve qualities of the Mother’s symbol, there is one symbol of the Mother coloured harmoniously. All other colour variations reflect the present state of consciousness of the individual behind the Symbol’s colouring.
                <br />
                <br />
            </Paragraph>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                    <Paragraph className="italic">
                        “Centre and four powers, white. The twelve, all of different colour in three groups:
                        <br /><br />
                        Top group red, passing to orange towards yellow.
                        <br />
                        Next group, yellow passing through green towards blue.
                        <br />
                        And third group, blue passing through violet towards red.
                        <br />
                        If white is not convenient, the center may be gold (powder).”
                    </Paragraph>

                    <Paragraph className="text-right italic mt-2">
                        – Sri Aurobindo
                    </Paragraph>
                </div>
                <button className="flex items-center gap-3 px-4 py-2 border-2 border-[#d5af3c] rounded-2xl shadow-xl bg-white hover:shadow-lg transition">
                    {/* Play icon + text column */}
                    <span className="flex flex-col items-center justify-center">
                        <Play size={24} className="text-gray-600 border-2 border-[#d5af3c]" />
                        <span className="text-xs font-bold text-[#404040] mt-1">Play video</span>
                    </span>

                    {/* Symbol Image */}
                    <img
                        src="/images/button_image.png"
                        alt="Symbol"
                        className="w-10 h-10 object-contain shrink-0"
                    />
                </button>

            </div>
            <br />
            <Paragraph>

                Science tells us that between blue and green comes teal / turquoise. The Mother however, specifically said that Sincerity is to be light blue.
            </Paragraph>
            <br />
            <br />
            <PdfPageButton name="living-symbol" page={32} />

        </>
    </div>;
}
