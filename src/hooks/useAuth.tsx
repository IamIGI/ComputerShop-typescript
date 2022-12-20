import { useContext, useDebugValue } from 'react';
import AuthContext, { AuthContextInterface } from 'context/AuthProvider';

const useAuth = () => {
    //#Added
    const { auth } = useContext(AuthContext) as AuthContextInterface;
    useDebugValue(auth, (auth) => (auth?.user ? 'Logged In' : 'Logged out')); // probably unused
    //--
    return useContext(AuthContext);
};

export default useAuth;
