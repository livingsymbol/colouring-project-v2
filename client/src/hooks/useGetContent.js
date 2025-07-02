import { useEffect, useState } from 'react';

export default function useGetContent(slug, locale = 'en') {
    const [page, setPage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!slug) return;

        const fetchPage = async () => {
            setLoading(true);
            try {
                const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/page/get/${slug}?locale=${locale}`);
                if (!res.ok) throw new Error('Page not found');
                const data = await res.json();
                setPage(data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setPage(null);
            } finally {
                setLoading(false);
            }
        };

        fetchPage();
    }, [slug, locale]);

    return { page, loading, error };
}
