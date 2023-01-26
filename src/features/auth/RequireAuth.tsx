import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from './authSlice';

interface RequireAuthProps {
    allowedRoles: number[];
}

const RequireAuth = ({ allowedRoles }: RequireAuthProps) => {
    const token = useSelector(selectCurrentToken);
    const location = useLocation();
    return token ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
};

export default RequireAuth;
