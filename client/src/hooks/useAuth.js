import { login, logout, register } from "../api/auth-api"
import { useAuthContext } from "../contexts/AuthContext";
import { logout as apiLogout } from "../api/auth-api";


export const useLogin = () => {
    const { changeAuthState } = useAuthContext();

    const loginHandler = async (email, password) => {
        try {
            const { password: _, _id: userId, ...restAuthData } = await login(email, password);
            const authData = { userId, ...restAuthData };
            
            console.log("Login API Response:", authData);
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
            const { password: _, _id: userId, ...restAuthData } = await register(username, email, password);
            const authData = { userId, ...restAuthData };

            console.log("Register API Response:", authData);
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
    const { logout: updateContextLogout  } = useAuthContext();

    const logoutHandler = async () => {
        try {
            await apiLogout();  // Send request to backend to invalidate session

            // Update application state
            updateContextLogout();
        } catch (error) {
            console.error("Failed to logout:", error);
        }

    }

    return logoutHandler;
};