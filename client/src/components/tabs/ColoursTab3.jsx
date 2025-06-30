import RichTextRenderer from "../RichTextRenderer";

const coloursTab3Content = {
    "type": "doc",
    "content": [
        {
            "type": "paragraph",
            "content": [
                {
                    "type": "text",
                    "text": "Colour is a direct conduit to the emotional body. Psychological studies show that colours evoke certain feelings, memories, and behaviors almost universally:"
                },
                { "type": "hardBreak" },
                { "type": "hardBreak" },
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
                                { "type": "text", "text": "Red: Excitement, urgency, aggression, desire." }
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
                                { "type": "text", "text": "Blue: Peace, truth, stability." }
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
                                { "type": "text", "text": "Green: Healing, balance, renewal." }
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
                                { "type": "text", "text": "Yellow: Joy, intellect, stimulation." }
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
                                { "type": "text", "text": "White: Clarity, purity, transcendence." }
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
                    "text": "The Mother herself assigned specific spiritual significances to colours and flowers, often reflecting these emotional-psychological resonances. For example:"
                },
                { "type": "hardBreak" },
                { "type": "hardBreak" },
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
                                { "type": "text", "text": "Pink – Love for the Divine" }
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
                                { "type": "text", "text": "White – Sincerity, Purity" }
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
                                { "type": "text", "text": "Gold – Supramental Light" }
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
                                { "type": "text", "text": "Violet – Humility, Transformation" }
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
                    "text": "When these colours are placed within the symbol, they evoke not only aesthetic or decorative qualities but deep psychological movements. A petal painted in soft pinks and greens may soothe the heart and awaken love. Thus, the symbol becomes a mirror and a catalyst—awakening qualities within us that align with the Divine forces it represents."
                }
            ]
        }
    ]
}

export default function ColoursTab3() {
    return <div className="w-full">
        <RichTextRenderer content={coloursTab3Content} />
    </div>;
}
