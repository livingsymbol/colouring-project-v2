import RichTextRenderer from "../RichTextRenderer";

const coloursTab5Content = {
    "type": "doc",
    "content": [
        {
            "type": "paragraph",
            "content": [
                {
                    "type": "text",
                    "text": "In yoga, colours are subtle indicators of consciousness states and their corresponding energy centers (chakras). Each chakra is associated with a particular vibration:"
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
                                    "text": "Muladhara (Root) – Red – Grounding, survival."
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
                                    "text": "Swadhisthana (Sacral) – Orange – Sensuality, emotion."
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
                                    "text": "Manipura (Solar plexus) – Yellow – Will, personal power."
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
                                    "text": "Anahata (Heart) – Green – Love, compassion."
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
                                    "text": "Vishuddha (Throat) – Blue – Expression, truth."
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
                                    "text": "Ajna (Third eye) – Indigo – Vision, intuition."
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
                                    "text": "Sahasrara (Crown) – Violet/White – Unity, transcendence."
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
                    "text": "These colour-energies correspond not just to the inner body, but also to planetary and cosmic forces. The Mother’s symbol, when aligned with these chakra colours, becomes a map of the evolving human being—from base consciousness to supramental unity."
                }
            ]
        },
        {
            "type": "paragraph",
            "content": [
                {
                    "type": "text",
                    "text": "In our work, we placed small symbols on each golden petal, indicating the integration of all consciousness levels in the Supramental. This is a way to show that nothing is left out—the whole human experience is included in the Divine transformation."
                }
            ]
        }
    ]
}



export default function ColoursTab5() {
    return <div className="w-full">
        <RichTextRenderer content={coloursTab5Content} />
    </div>;
}
