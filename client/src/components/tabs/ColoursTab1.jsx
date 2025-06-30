import RichTextRenderer from "../RichTextRenderer";

const coloursTab1Content = {
    "type": "doc",
    "content": [
        {
            "type": "paragraph",
            "content": [
                {
                    "type": "text",
                    "text": "Physics offers the foundational understanding of what colour is. Light is electromagnetic energy, and visible colour is just a narrow band of the electromagnetic spectrum. Each colour corresponds to a specific wavelength:"
                },
                { "type": "hardBreak" },
                { "type": "hardBreak" }
            ]
        },
        {
            "type": "bulletList",
            "content": [
                {
                    "type": "listItem",
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "- Red: Long wavelengths, lower vibration (~700 nm) – slow, grounding, intense."
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "listItem",
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Blue/violet: Shorter wavelengths, higher vibration (~400 nm) – faster, subtler, more ethereal."
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "type": "paragraph",
            "content": [
                { "type": "hardBreak" },
                {
                    "type": "text",
                    "text": "This scientific grounding helps us see that colour is not “in” the object, but arises from how objects reflect or absorb light. When applied to the Mother’s symbol, this tells us that the colours used are not arbitrary. Their frequency and intensity may correspond to energetic qualities in consciousness - "
                },
                {
                    "type": "text",
                    "marks": [{ "type": "underline" }],
                    "text": "more dense and active"
                },
                {
                    "type": "text",
                    "text": " at lower frequencies (red, orange) and more refined and subtle at higher ones (blue, violet, white). Colour thus becomes an energetic language, encoded with vibrational information, aligning perfectly with Sri Aurobindo’s and the Mother’s vision of consciousness as a graded spectrum of vibrational energy and awareness."
                }
            ]
        }
    ]
}

export default function ColoursTab1() {
    return <div className="w-full">
        <RichTextRenderer content={coloursTab1Content} />
    </div>;
}
