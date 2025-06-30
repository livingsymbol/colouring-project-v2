import RichTextRenderer from "../RichTextRenderer";

const galleryTab1Content = {
    "type": "doc",
    "content": [
        {
            "type": "paragraph",
            "content": [
                {
                    "type": "text",
                    "text": "Get inspired by the work of others done with sincerity, aspiration, love and surrender to The Mother. Some shared powerful inner experiences that were triggered by the symbols. On the Supramental level, there is no separation — all is united in the One. Separation begins only at the Overmind level. To illustrate this, we designed small symbols on each golden petal to signify the all-encompassing nature of the Supramental, while also indicating the varying levels of consciousness (Overmind).",
                },
            ]
        }]
}

export default function GalleryTab1() {
    return <div className="w-full">
        <RichTextRenderer content={galleryTab1Content} />
    </div>;
}
