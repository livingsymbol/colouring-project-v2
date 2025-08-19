import RichTextRenderer from "../RichTextRenderer";

export default function FindingTab1({ content }) {
    return <div className="w-full">
        <RichTextRenderer content={content} />
    </div>;
}
