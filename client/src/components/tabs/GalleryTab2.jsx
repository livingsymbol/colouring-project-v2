import RichTextRenderer from "../RichTextRenderer";

const galleryTab2Content = {
    "type": "doc",
    "content": [
        {
            "type": "paragraph",
            "content": [
                {
                    "type": "text",
                    "text": "Which Symbols are correct, and which are not? What criteria should be used to evaluate them? Applying what you have learned, you may bring any of these colourings closer to harmony. What resonates with you and why? You are welcome to share colourings of your choice with changes and comments for anonymous publishing in the “Forum & your colourings” section. Please clarify which image you are bringing closer to harmony by mentioning the image number.Then send it to: ",
                },
            ]
        },{
            "type": "text",
            "marks": [{ "type": "underline" }],
            "text": "themotherssymbol@gmail.com"
        },

    ]
}

export default function GalleryTab2() {
    return <div className="w-full">
        <RichTextRenderer content={galleryTab2Content} />
    </div>;
}
