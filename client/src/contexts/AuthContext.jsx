import { createContext, useContext, useEffect, useState } from "react";
import usePersistedState from "../hooks/usePersistedState";

export const AuthContext = createContext({
    userId: '',
    email: '',
    username: '',
    accessToken: '',
    isAuthenticated: false,
    changeAuthState: (authState = {}) => null
});


export function AuthContextProvider(props) {
    const [authState, setAuthState] = usePersistedState('auth', {
        userId: '',
        email: '',
        username: '',
        accessToken: ''
    });

    const changeAuthState = (state) => {
        setAuthState(state)
    }

    const contextData = {
        userId: authState.userId,
        email: authState.email,
        username: authState.username,
        accessToken: authState.accessToken,
        isAuthenticated: !!authState.accessToken,
        changeAuthState
    }
    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    )
}


export function useAuthContext() {
    const authData = useContext(AuthContext);

    return authData;
}