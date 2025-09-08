import RichTextRenderer from "../RichTextRenderer";
import Paragraph from "../Paragraph";
import PdfPageButton from "../PdfPageButton";

export default function ColoursTab1({ content }) {
    return <div className="w-full">
        {/* <RichTextRenderer content={content} /> */}
        <>
            <img
                src="/images/ct1.png"
                alt="Example"
                className="
          float-none mx-auto sm:float-right
          sm:ml-4 mb-2
          w-64 sm:w-1/3 h-auto
          rounded-lg
          "
            />
            <Paragraph className="ProseMirror">
                Physics offers the foundational understanding of what colour is. Light is electromagnetic energy, and visible colours are frequencies of electromagnetic radiation. They range from lower-frequency red to higher-frequency violet.
                <br />
                <br />
                <ul>

                    <li>Violet: Shorter wavelengths, higher vibration (~400 nm) – faster, subtler, more ethereal.</li>
                    <li>Red: Long wavelengths, lower vibration (~665 nm) – slow, grounding, intense.</li>
                </ul>
                <br />
                <br />
                This gradient mirrors the chakra system in Yoga, where the base corresponds to red and the crown to violet. The colours assigned by Sri Aurobindo follow this scale, suggesting an ascent in consciousness. We reasoned that the six missing colours must follow the same logic - occupying intermediate frequencies between the existing colours.
                <br />
                <br />

                Scientific grounding helps us see that colour is not “in” the object but arises from how objects reflect or absorb light. When applied to the Mother’s symbol, this tells us that
                the colours used are not arbitrary. Their frequency and intensity may correspond to energetic qualities in consciousness - more dense and active at lower frequencies (red, orange) and more refined and subtle at higher ones (blue, violet, white).
                <br />
                <br />

                Colour thus becomes an energetic language, encoded with vibrational information, aligning perfectly with Sri Aurobindo’s and the Mother’s vision of consciousness as a graded spectrum of vibrational energy and awareness.
                <br />
                <br />

                Colour is how we define specific wavelengths in the visible spectrum. Objects don't have a colour. Colour of an object is seen because the object merely reflects, absorbs, and transmits one or more colours that make up light. For e.g. a “green” leaf is absorbing red and blue light, so only green light reflects off it. In the dark, there is no colour i.e. absence of light.

                <br />
                <br />

                Most colour experience can be described within three dimensions:
                <br />
                <br />
                <ul>
                    <li>Hue – i.e. “colour” e.g. red, yellow, blue, magenta etc.</li>
                    <li>Saturation - ranges from "colourless" through "pale" to "vivid". The perceived colour can be described as closer to the "colourless" or purely chromatic end</li>
                    <li>Brightness - apparent amount of light, varying from "dim" to "bright"</li>
                </ul>
            </Paragraph>
            <PdfPageButton page={3} />
        </>

    </div >;
}
