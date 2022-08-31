import { createContext, useContext } from "react";

type Auth = {
    isAuthenticated?: boolean;
}

const initialAuth: Auth = {
    isAuthenticated: false
};

const AuthContext = createContext<[Auth, (auth: Auth) => void]>([initialAuth, () => { }]);
export const useAuthContext = () => useContext(AuthContext);
