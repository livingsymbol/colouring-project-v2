import RichTextRenderer from "../RichTextRenderer";

const coloursTab4Content = {
    "type": "doc",
    "content": [
        {
            "type": "paragraph",
            "content": [
                {
                    "type": "text",
                    "text": "Art trains us to see relationships: between form, line, contrast, and balance. Colour theory teaches us:"
                }
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
                                    "text": "Complementary colours (opposites on the colour wheel) heighten contrast and attention."
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
                                    "text": "Analogous colours (next to each other) create harmony and flow."
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
                                    "text": "Warm and cool tones evoke depth, emotion, and motion."
                                }
                            ]
                        }
                    ]
                },
                { "type": "hardBreak" },
            ]
        },
        {
            "type": "paragraph",
            "content": [
                {
                    "type": "text",
                    "text": "Through this lens, the coloured  Mother’s symbol becomes an aesthetic-spiritual mandala, where each colour and its position communicates both vibration and meaning."
                }
            ]
        },
        {
            "type": "paragraph",
            "content": [
                {
                    "type": "text",
                    "text": "When we play with colours in the symbol—shifting tones, harmonizing contrasts—we are not merely decorating; we are revealing new inner compositions, new ways for the soul to experience the Divine. This is not unlike what the Impressionists or Expressionists sought: to convey inner experience through outer form."
                }
            ]
        }
    ]
}


export default function ColoursTab4() {
    return <div className="w-full">
        <RichTextRenderer content={coloursTab4Content} />
    </div>;
}
