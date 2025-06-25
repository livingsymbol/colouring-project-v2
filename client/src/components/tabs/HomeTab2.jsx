import RichTextRenderer from "../RichTextRenderer";

const homeTab2Content = {
    "type": "doc",
    "content": [
        {
            "type": "paragraph",
            "content": [
                { "type": "text", "text": "Sri Aurobindo on Colour:" },
                { "type": "hardBreak" },
                { "type": "hardBreak" }
            ]
        },
        {
            "type": "paragraph",
            "content": [
                {
                    "type": "text",
                    "marks": [{ "type": "italic" }],
                    "text": "“There is an order of significances in which they indicate various psychological dynamisms, e.g., faith, love, protection, etc. There is another order of significances in which they indicate the aura or the activity of divine beings, Krishna, Mahakali, Radha or else of other superhuman beings."
                },
                { "type": "hardBreak" },
                {
                    "type": "text",
                    "marks": [{ "type": "italic" }],
                    "text": "Colour and light are always close to each other - colour being more indicative, light more dynamic. Colour incandescent becomes light.”"
                }
            ]
        },
        {
            "type": "paragraph",
            "content": [
                { "type": "hardBreak" },
                { "type": "text", "text": "Sri Aurobindo on the Symbol:" },
                { "type": "hardBreak" },
                { "type": "hardBreak" }
            ]
        },
        {
            "type": "paragraph",
            "content": [
                {
                    "type": "text",
                    "marks": [{ "type": "italic" }],
                    "text": "“Centre and four powers, white. The twelve, all of different colour in three groups:"
                },
                { "type": "hardBreak" },
                {
                    "type": "text",
                    "marks": [{ "type": "italic" }],
                    "text": "Top group red, passing to orange towards yellow."
                },
                { "type": "hardBreak" },
                {
                    "type": "text",
                    "marks": [{ "type": "italic" }],
                    "text": "Next group, yellow passing through green towards blue."
                },
                { "type": "hardBreak" },
                {
                    "type": "text",
                    "marks": [{ "type": "italic" }],
                    "text": "And third group, blue passing through violet towards red."
                },
                { "type": "hardBreak" },
                {
                    "type": "text",
                    "marks": [{ "type": "italic" }],
                    "text": "If white is not convenient, the center may be gold (powder).”"
                }
            ]
        },
        {
            "type": "paragraph",
            "content": [
                { "type": "hardBreak" },
                { "type": "hardBreak" },
                { "type": "hardBreak" },
                { "type": "hardBreak" },
                { "type": "hardBreak" },
                {
                    "type": "text",
                    "marks": [{ "type": "bold" }, { "type": "italic" }],
                    "text": "~ Om namo Bhagavate ~"
                }
            ]
        }
    ]
}

export default function HomeTab2() {
    return <div>
        <RichTextRenderer content={homeTab2Content} />
    </div>;
}
