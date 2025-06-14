import { useState, useEffect } from 'react';

export default function useGetUser() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            setUser(null);
            setLoading(false);
            return;
        }

        const fetchUser = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/me`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!res.ok) throw new Error('Unauthorized');

                const data = await res.json();
                setUser(data.user);
            } catch (err) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    return { user, loading };
}
