import { createContext, useContext } from "react";
import usePersistedState from "../hooks/usePersistedState";

export const AuthContext = createContext({
    userId: '',
    email: '',
    username: '',
    accessToken: '',
    isAuthenticated: false,
    changeAuthState: (authState = {}) => null,
    logout: () => null
});


export function AuthContextProvider(props) {
    const [authState, setAuthState] = usePersistedState('auth', {});

    const changeAuthState = (state) => {
        setAuthState(state);
    }

    const logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('auth');  // Clear persisted state
        setAuthState({
            userId: '',
            email: '',
            username: '',
            accessToken: ''
        });  // Reset state
    };

    const contextData = {
        userId: authState.userId,
        email: authState.email,
        username: authState.username,
        accessToken: authState.accessToken,
        isAuthenticated: !!authState?.email,
        changeAuthState,
        logout
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