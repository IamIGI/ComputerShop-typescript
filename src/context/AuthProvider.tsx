import { createContext, useState, ReactNode } from 'react';

interface AuthProps {
    children: ReactNode;
}

export interface AuthInterface {
    id: string | null;
    userName: string | null;
    email: string | null;
    roles: number[] | null;
    accessToken: string | null;
    user?: boolean | null;
}

export interface AuthContextInterface {
    auth: AuthInterface;
    setAuth: (value: {} | AuthInterface) => void;
}

const AuthContext = createContext<AuthContextInterface | {}>({});

export const AuthProvider = ({ children }: AuthProps) => {
    const [auth, setAuth_] = useState<AuthInterface | {}>({});

    const setAuth = (value: {} | AuthInterface) => {
        setAuth_(value);
    };

    return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
