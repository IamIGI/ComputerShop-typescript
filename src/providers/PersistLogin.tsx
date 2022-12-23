import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useRefreshToken from 'hooks/useRefreshToken';
import useAuth from 'hooks/useAuth';
import useLocalStorage from 'hooks/useLocalStorage';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation.rsx';
import { AuthContextInterface, AuthInterface } from 'context/AuthProvider';

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const { auth } = useAuth() as AuthContextInterface;
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

        !auth.accessToken && persist ? verifyRefreshToken() : setIsLoading(false);

        return () => {
            isMounted = false;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <>{!persist ? <Outlet /> : isLoading ? <LoadingAnimation loadingSize={15} /> : <Outlet />}</>;
};

export default PersistLogin;
