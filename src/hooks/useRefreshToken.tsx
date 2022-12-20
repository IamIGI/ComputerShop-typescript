import { AuthContextInterface, AuthInterface } from 'context/AuthProvider';
import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth() as AuthContextInterface;

    const refresh = async () => {
        const response = await axios.get('/refresh', {
            withCredentials: true,
        });
        setAuth((prev: AuthInterface) => {
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            const userName = response?.data?.userName;
            const id = response?.data?.id;

            return { ...prev, id, userName, roles, accessToken };
        });
        return response.data.accessToken;
    };
    return refresh;
};

export default useRefreshToken;
