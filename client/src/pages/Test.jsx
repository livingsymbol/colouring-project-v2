import useGetContent from '../hooks/useGetContent';
import { useLocale } from '../context/LocaleContext';
import Heading from '../components/Heading';
import { Loader2 } from 'lucide-react';
import Tabs from '../components/Tabs';

function Renderer({ content }) {
    return (
        <div
            className="w-full my-4 text-[#404040] text-base sm:text-lg leading-relaxed ProseMirror"
            dangerouslySetInnerHTML={{ __html: content }}
        />
    )
}

export default function Test() {
    const slug = window.location.pathname.split('/')[1];
    const { locale } = useLocale();
    const { page, loading, error } = useGetContent(slug, locale);

    if (loading)
        return (
            <div className="flex justify-center items-center gap-x-4">
                <Loader2 className="animate-spin text-[#404040]" size={32} />
                Loading...
            </div>
        );

    if (error) return <p>Error: {error}</p>;

    if (!page || !page.tabs) {
        return <p>Page data is incomplete</p>;
    }   

    const tabsData = page.tabs.map((tab) => ({
        label: tab.label,
        content: <Renderer content={tab.content} />,
    }));

    return (
        <div>
            <Heading>{page.title || page.tabs[0].label}</Heading>

            {/* Tabs */}
            <Tabs items={tabsData} />
        </div>
    );
}
