// import useGetContent from '../hooks/useGetContent';
// import { useLocale } from '../context/LocaleContext';
// import Heading from '../components/Heading';
// import { Loader2 } from 'lucide-react';
// import Tabs from '../components/Tabs';

// function Renderer({ content }) {
//     return (
//         <div
//             className="w-full my-4 text-[#404040] text-base sm:text-lg leading-relaxed ProseMirror"
//             dangerouslySetInnerHTML={{ __html: content }}
//         />
//     )
// }

// export default function Test() {
//     const slug = window.location.pathname.split('/')[1];
//     const { locale } = useLocale();
//     const { page, loading, error } = useGetContent(slug, locale);

//     if (loading)
//         return (
//             <div className="flex justify-center items-center gap-x-4">
//                 <Loader2 className="animate-spin text-[#404040]" size={32} />
//                 Loading...
//             </div>
//         );

//     if (error) return <p>Error: {error}</p>;

//     if (!page || !page.tabs) {
//         return <p>Page data is incomplete</p>;
//     }

//     const tabsData = page.tabs.map((tab) => ({
//         label: tab.label,
//         content: <Renderer content={tab.content} />,
//     }));

//     return (
//         <div>
//             <Heading>{page.title}</Heading>
//             <div className="p-2 sm:p-4">
//                 {page.content && <Renderer content={page.content} />}
//             </div>

//             <br />
//             <Tabs items={tabsData} />
//         </div>
//     );
// }


import { useMemo } from "react";
import { useParams } from "react-router-dom";
import useGetContent from "../hooks/useGetContent";
import { useLocale } from "../context/LocaleContext";
import Heading from "../components/Heading";
import { Loader2 } from "lucide-react";
import Tabs from "../components/Tabs";

function Renderer({ content }) {
    return (
        <div
            className="w-full my-4 text-[#404040] text-base sm:text-lg leading-relaxed ProseMirror"
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
}

export default function Test() {
    const { slug: paramSlug } = useParams();
    const slug = paramSlug || ""; // fallback

    const { locale } = useLocale();
    const { page, loading, error } = useGetContent(slug, locale);

    if (loading) {
        return (
            <div className="flex justify-center items-center gap-x-4">
                <Loader2 className="animate-spin text-[#404040]" size={32} />
                Loading...
            </div>
        );
    }

    if (error) return <p>Error: {error}</p>;

    if (!page) {
        return <p>Page not found</p>;
    }

    if (!page.tabs || !Array.isArray(page.tabs)) {
        return <p>Page data is incomplete</p>;
    }

    const tabsData =
        page.tabs.map((tab, idx) => ({
            key: `${slug}-tab-${idx}-${tab.label}`,
            label: tab.label,
            content: <Renderer content={tab.content} />,
        }))

    return (
        <div>
            <Heading>{page.title}</Heading>

            <div className="p-2 sm:p-4">
                {page.content && <Renderer content={page.content} />}
            </div>

            <br />

            <Tabs items={tabsData} />
        </div>
    );
}
