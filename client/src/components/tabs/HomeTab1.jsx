import RichTextRenderer from "../RichTextRenderer";

const homeTab1Content = {
    "type": "doc",
    "content": [
        {
            "type": "paragraph",
            "content": [
                {
                    "type": "text",
                    "text": "“Earthly life is the place for progress. It is here on earth, that progress is possible, during the period of earthly existence. And it is the psychic which carries the progress over from one life to another, by organizing its own evolution and development itself.”",
                    "marks": [{ "type": "italic" }]
                },
                { "type": "hardBreak" },
                {
                    "type": "paragraph",
                    "attrs": { "textAlign": "right" },
                    "content": [
                        {
                            "type": "text",
                            "text": " - The Mother",
                            "marks": [{ "type": "italic" }]
                        }
                    ]
                },
                { "type": "hardBreak" },
                {
                    "type": "text",
                    "text": "The Mother on the Symbol:"
                },
                { "type": "hardBreak" },
                {
                    "type": "text",
                    "text": "“The twelve attributes:",
                    "marks": [{ "type": "italic" }]
                },
                { "type": "hardBreak" },
                {
                    "type": "text",
                    "text": "Sincerity – Humility – Gratitude – Perseverance",
                    "marks": [{ "type": "italic" }]
                },
                { "type": "hardBreak" },
                {
                    "type": "text",
                    "text": "Aspiration – Receptivity – Progress – Courage",
                    "marks": [{ "type": "italic" }]
                },
                { "type": "hardBreak" },
                {
                    "type": "text",
                    "text": "Goodness – Generosity – Equality – Peace",
                    "marks": [{ "type": "italic" }]
                },
                { "type": "hardBreak" },
                {
                    "type": "text",
                    "text": "The first eight concern attitude towards the Divine, and the last four towards humanity.”",
                    "marks": [{ "type": "italic" }]
                },
                { "type": "hardBreak" },
                { "type": "hardBreak" },
                {
                    "type": "text",
                    "text": "Mother, in your symbol the twelve petals signify the twelve inner planes, don’t they?"
                },
                { "type": "hardBreak" },
                {
                    "type": "text",
                    "text": "“It signifies anything one wants, you see. Twelve: that’s the number of Aditi, of Mahashakti. So it applies to everything; all Her action has twelve Aspects. There are also Her twelve Virtues, Her twelve Powers, Her twelve Aspects, and then Her twelve Planes of manifestation and many other things that are twelve; and the symbol, the number twelve is in itself a symbol. It is the symbol of manifestation, double perfection, in essence and in manifestation, in the creation.”",
                    "marks": [{ "type": "italic" }]
                },
                { "type": "hardBreak" },
                { "type": "hardBreak" },
                {
                    "type": "text",
                    "text": "What are the twelve aspects, Sweet Mother?"
                },
                { "type": "hardBreak" },
                {
                    "type": "text",
                    "text": "“Ah, my child, I have described this somewhere, but I don’t remember now. For it is always a choice, you see; according to what one wants to say, one can choose these twelve Aspects or twelve others, or give them different names. The same Aspect can be named in different ways. This does not have the fixity of a mental theory. (Silence)",
                    "marks": [{ "type": "italic" }]
                },
                { "type": "hardBreak" },
                {
                    "type": "text",
                    "text": "According to the angle from which one sees the creation, one day I may describe twelve Aspects to you; and then another day, because I have shifted my centre of observation, I may describe twelve others, and they will be equally true.”",
                    "marks": [{ "type": "italic" }]
                },
                { "type": "hardBreak" },
                { "type": "hardBreak" },
                { "type": "hardBreak" },
                {
                    "type": "text",
                    "text": "~ Om namo Bhagavate ~"
                },
            ]
        }
    ]
}

export default function HomeTab1() {
    return <div>
        <RichTextRenderer content={homeTab1Content} />
    </div>;
}
