import axios from 'api/axios';

import { logOut } from 'features/auth/authSlice';
import { removeBasket } from 'features/basket/basketSlice';
import { useDispatch } from 'react-redux';

const useLogout = () => {
    const dispatch = useDispatch();

    const logout = async () => {
        dispatch(logOut());
        dispatch(removeBasket());
        localStorage.clear();

        try {
            await axios('/logout', { withCredentials: true });
        } catch (err) {
            console.error(err);
        }
    };
    return logout;
};

export default useLogout;
