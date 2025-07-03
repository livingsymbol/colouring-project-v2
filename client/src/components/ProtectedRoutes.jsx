import { Navigate } from 'react-router-dom';
import useGetUser from '../hooks/useGetUser';
import { Loader2 } from 'lucide-react';

const USE_CREDENTIAL_AUTH = import.meta.env.VITE_USE_CREDENTIAL_AUTH === 'true';

export default function ProtectedRoutes({ children, requiredRole = USE_CREDENTIAL_AUTH ? 'user' : 'guest' }) {
    const { user, loading } = useGetUser();

    if (loading) return <div className="flex justify-center items-center gap-x-4">
        <Loader2 className="animate-spin text-[#3300cc]" size={32} />
        Loading...
    </div>;

    if (!user) {
        return <Navigate to={USE_CREDENTIAL_AUTH ? "/auth" : "/admin/login"} replace />;
    }

    if (requiredRole && user.role !== requiredRole) {
        return <Navigate to={USE_CREDENTIAL_AUTH ? "/auth" : "/admin/login"} replace />;
    }

    return children;
}
