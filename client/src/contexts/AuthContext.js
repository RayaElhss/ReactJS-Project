import { createContext } from "react";

export const AuthContext = createContext({
    userId: '',
    email: '',
    username: '',
    acessToken: '',
    isAuthenticated: false,
    changeAuthState: (authState = {}) => null
});

