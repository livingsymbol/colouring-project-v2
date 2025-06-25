import { generateHTML } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import HardBreak from '@tiptap/extension-hard-break'

export default function RichTextRenderer({ content }) {
    const html = generateHTML(content, [
        StarterKit.configure({
            hardBreak: false,
        }),
        HardBreak,
        Underline,
        Link,
        TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ])

    return (
        <p className="my-4 text-[#0000cc] font-semibold text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: html }} />
    )
}
