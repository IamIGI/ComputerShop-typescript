import { createContext, useState, ReactNode } from 'react';

const AuthContext = createContext({});

interface AuthProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProps) => {
    const [auth, setAuth] = useState({});

    return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
