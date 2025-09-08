import RichTextRenderer from "../RichTextRenderer";
import Paragraph from '../Paragraph';
import PdfPageButton from "../PdfPageButton";

export default function FindingTab1({ content }) {
    return <div className="w-full">
        {/* <RichTextRenderer content={content} /> */}
        <>
            <Paragraph className="ProseMirror">
                Colour is how we define specific wavelengths in the visible spectrum. It is an energetic language, that aligns with Sri Aurobindo and the Mother’s vision of consciousness as a graded spectrum of vibrational energy and awareness.
                <br />
                <br />
                Colour frequency and intensity may correspond to energetic qualities in consciousness:
                <br />
                <ul>

                    <li>More dense and active at lower frequencies ↔ Red/Orange</li>
                    <li>More refined and subtle at higher frequencies ↔ Blue/Violet</li>
                </ul>
                <br />
                Colour and sound are interconnected especially in mystical and artistic traditions. Ancient philosophies and modern science both explore how tones and colour relate:
                <br />
                <ul>

                    <li>Low sounds ↔ Red/Orange</li>
                    <li>High sounds ↔ Blue/Violet</li>
                </ul>
                <br />
                Some individuals perceive colours corresponding to specific musical notes and individuals as having a colour or tone, reflecting their soul’s vibration. Music, when played during meditative viewing of the symbol, can enhance or unlock new dimensions of experience combining auditory and visual vibrations to deepen contact with the Divine Presence.
            </Paragraph>
            <PdfPageButton name="living-symbol" page={5} />

        </>
    </div>;
}
