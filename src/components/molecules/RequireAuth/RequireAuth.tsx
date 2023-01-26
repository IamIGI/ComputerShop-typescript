import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { selectAuth } from 'features/auth/authSlice';
import { useSelector } from 'react-redux';

interface RequireAuthProps {
    allowedRoles: number[];
}

const RequireAuth = ({ allowedRoles }: RequireAuthProps) => {
    const auth = useSelector(selectAuth);

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
