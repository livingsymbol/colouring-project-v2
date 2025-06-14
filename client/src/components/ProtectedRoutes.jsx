import { Navigate } from 'react-router-dom';
import useGetUser from '../hooks/useGetUser';
import Loader from './Loader';

const USE_CREDENTIAL_AUTH = import.meta.env.VITE_USE_CREDENTIAL_AUTH === 'true';

export default function ProtectedRoutes({ children, requiredRole = USE_CREDENTIAL_AUTH ? 'user' : 'guest' }) {
    const { user, loading } = useGetUser();

    if (loading) return <Loader />;

    if (!user) {
        return <Navigate to={USE_CREDENTIAL_AUTH ? "/auth" : "/admin/login"} replace />;
    }

    if (requiredRole && user.role !== requiredRole) {
        return <Navigate to={USE_CREDENTIAL_AUTH ? "/auth" : "/admin/login"} replace />;
    }

    return children;
}
