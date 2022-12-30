import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import { AuthContextInterface } from 'context/AuthProvider';

interface RequireAuthProps {
    allowedRoles: number[];
}

const RequireAuth = ({ allowedRoles }: RequireAuthProps) => {
    const { auth } = useAuth() as AuthContextInterface;

    const location = useLocation();

    return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
        <>
            <Outlet /> {/*//Show protected Routes */}
        </>
    ) : auth?.accessToken ? (
        <>
            <Navigate to="unauthorized" state={{ from: location }} replace />
        </>
    ) : (
        //Back user to page where he came from
        <Navigate to="/" state={{ from: location }} replace />
    );
};

export default RequireAuth;
