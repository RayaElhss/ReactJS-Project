import { useContext } from "react";

import { login, register } from "../api/auth-api"
import { AuthContext } from "../contexts/AuthContext";

export const useLogin = () => {
    const { changeAuthState } = useContext(AuthContext);

    const loginHandler = async (email, password) => {
        const {password: _, ...authData} = await login(email, password);


        // Store the token in localStorage
        localStorage.setItem('accessToken', authData.accessToken);
        localStorage.setItem('userId', authData.userId);
        localStorage.setItem('email', authData.email);

        // updated application state
        changeAuthState(authData)

        return authData;
    };

    return loginHandler;
};

export const useRegister = () => {
    const { changeAuthState } = useContext(AuthContext);

    const registerHandler = async (email, password) => {
        const {password: _, ...authData} = await register(email, password);

        localStorage.setItem('accessToken', authData.accessToken);
        localStorage.setItem('userId', authData.userId);
        localStorage.setItem('email', authData.email);
        
        changeAuthState(authData)

        return authData;

    };

    return registerHandler;
}