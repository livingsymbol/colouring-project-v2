import { generateHTML } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import HardBreak from '@tiptap/extension-hard-break'
import BulletList from '@tiptap/extension-bullet-list'
import ListItem from '@tiptap/extension-list-item'

export default function RichTextRenderer({ content }) {
    const html = generateHTML(content, [
        StarterKit.configure({
            hardBreak: false,
            bulletList: false,
            listItem: false
        }),
        HardBreak,
        Underline,
        Link,
        TextAlign.configure({ types: ['heading', 'paragraph'] }),
        BulletList,
        ListItem
    ])

    return (
        <p
            className="my-4 text-[#0000cc] font-semibold text-base sm:text-lg leading-relaxed "
            dangerouslySetInnerHTML={{ __html: html }}
        />
    )
}
