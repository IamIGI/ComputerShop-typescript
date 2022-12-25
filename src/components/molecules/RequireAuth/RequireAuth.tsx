import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import { AuthContextInterface } from 'context/AuthProvider';

interface RequireAuthProps {
    allowedRoles: number[];
}

const RequireAuth = ({ allowedRoles }: RequireAuthProps) => {
    const { auth } = useAuth() as AuthContextInterface;
    const location = useLocation();

    //check roles if roles missing, check if user is logged in if not navigate him to page where he come
    return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
        <>
            {/* {console.log('Access granted: protected routes ')} */}
            <Outlet /> {/*//Show protected Routes */}
        </>
    ) : auth?.accessToken ? (
        <>
            {/* {console.log('Unauthorized')} */}
            <Navigate to="unauthorized" state={{ from: location }} replace />
        </>
    ) : (
        //Back user to page where he came from
        <Navigate to="/" state={{ from: location }} replace />
    );
};

export default RequireAuth;
