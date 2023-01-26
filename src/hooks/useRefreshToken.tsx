import { setCredentials } from 'features/auth/authSlice';
import { useDispatch } from 'react-redux';
import axios from '../api/axios';

const useRefreshToken = () => {
    const dispatch = useDispatch();
    const refresh = async () => {
        const response = await axios.get('/refresh', {
            withCredentials: true,
        });
        const accessToken = response?.data?.accessToken;
        const roles = response?.data?.roles;
        const userName = response?.data?.userName;
        const id = response?.data?.id;
        const email = response?.data?.email;
        dispatch(setCredentials({ accessToken, roles, userName, id, email }));
        return response.data.accessToken;
    };
    return refresh;
};

export default useRefreshToken;
