import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext({
    userId: '',
    email: '',
    username: '',
    accessToken: '',
    isAuthenticated: false,
    changeAuthState: (authState = {}) => null
});


export function AuthContextProvider(props) {
    const [authState, setAuthState] = useState({
        userId: '',
        email: '',
        username: '',
        accessToken: ''
    });
    useEffect(() => {
        const storedAccessToken = localStorage.getItem('accessToken');
        const storedUserId = localStorage.getItem('userId');
        const storedEmail = localStorage.getItem('email');
        const storedUsername = localStorage.getItem('username');

        if (storedAccessToken && storedUserId && storedEmail && storedUsername) {
            setAuthState({
                accessToken: storedAccessToken,
                userId: storedUserId,
                email: storedEmail,
                username: storedUsername,
            });
        }
    }, []);


    const changeAuthState = (state) => {
        localStorage.setItem('accessToken', state.accessToken)
        localStorage.setItem('userId', state.userId)
        localStorage.setItem('email', state.email)
        localStorage.setItem('username', state.username);
        setAuthState(state);
    };

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