import { login, logout, register } from "../api/auth-api"
import { useAuthContext } from "../contexts/AuthContext";
import { logout as apiLogout } from "../api/auth-api";

export const useLogin = () => {
    const { changeAuthState } = useAuthContext();

    const loginHandler = async (email, password) => {
        try {
            const { password: _, ...authData } = await login(email, password);
            changeAuthState(authData);

            return authData;
        } catch (error) {
            console.error("Login failed:", error);
            throw error;
        }

    };

    return loginHandler;
};

export const useRegister = () => {
    const { changeAuthState } = useAuthContext();

    const registerHandler = async (username, email, password) => {
        try {
            const { password: _, ...authData } = await register(username, email, password);
            changeAuthState(authData);

            return authData;
        } catch (error) {
            console.error("Registration failed:", error);
            throw error;
        }
    };

    return registerHandler;
}

export const useLogout = () => {
    const { logout: localLogout } = useAuthContext();

    const logoutHandler = async () => {
        try {
            await apiLogout();
            localLogout();
        } catch (error) {
            console.error("Failed to logout:", error);
        }

    }

    return logoutHandler;
};