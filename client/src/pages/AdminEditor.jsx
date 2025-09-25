import { useState } from "react";
import JoditEditor from "jodit-react";

export default function AdminEditorJodit({ initialContent }) {
    const [content, setContent] = useState(initialContent);

    return (
        <div className="p-6 space-y-6">
            <JoditEditor
                value={content}
                config={{
                    height: 400,
                    readonly: false,
                    toolbarAdaptive: false,
                    toolbarSticky: true,
                    uploader: { insertImageAsBase64URI: true },
                }}
                onChange={(newContent) => setContent(newContent)}
            />

            <div className="p-4 border rounded-lg bg-gray-50">
                <h2 className="text-lg font-semibold mb-2">Live Preview:</h2>
                <div
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </div>
        </div>
    );
}
