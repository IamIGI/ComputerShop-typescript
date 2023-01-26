import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useRefreshToken from 'hooks/useRefreshToken';
import useLocalStorage from 'hooks/useLocalStorage';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from 'features/auth/authSlice';
import { removeBasket } from 'features/basket/basketSlice';

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const dispatch = useDispatch();
    const auth = useSelector(selectAuth);
    const [persist] = useLocalStorage('persist', false);

    useEffect(() => {
        let isMounted = true;
        const verifyRefreshToken = async () => {
            try {
                await refresh();
            } catch (err) {
                console.error(err);
            } finally {
                isMounted && setIsLoading(false);
            }
        };

        if (!auth.accessToken && persist) {
            verifyRefreshToken();
        } else {
            setIsLoading(false);
            dispatch(removeBasket());
        }

        return () => {
            isMounted = false;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <>{!persist ? <Outlet /> : isLoading ? <LoadingAnimation loadingSize={15} /> : <Outlet />}</>;
};

export default PersistLogin;
