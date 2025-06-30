import RichTextRenderer from "../RichTextRenderer";

const coloursTab2Content = {
    "type": "doc",
    "content": [
        {
            "type": "paragraph",
            "content": [
                {
                    "type": "text",
                    "text": "Physiology explores how the eye receives light and how the brain processes it. Human eyes have three types of cone cells tuned to red, green, and blue light. Our perception of colour is a construct—a synthesis of light data interpreted by the brain. Factors that influence our perception:"
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
                                    "text": "Lighting conditions"
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
                                    "text": "Retinal fatigue (afterimages)"
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
                                    "text": "Colour blindness or individual differences"
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
                                    "text": "Cultural associations"
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
                    "text": "Thus, two people looking at the "
                },
                {
                    "type": "text",
                    "marks": [{ "type": "underline" }],
                    "text": "same coloured "
                },
                {
                    "type": "text",
                    "text": "Mother’s symbol may see or feel it differently. This brings tolerance and openness into our exploration: perhaps some of the variations we observed weren’t \"mistakes\" but expressions of individual physiological and psychological response. This also reflects the living nature of the symbol—its resonance can change depending on the state of the individual."
                }
            ]
        }
    ]
}

export default function ColoursTab2() {
    return <div className="w-full">
        <RichTextRenderer content={coloursTab2Content} />
    </div>;
}
