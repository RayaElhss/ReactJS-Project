import { login, logout, register } from "../api/auth-api"
import { useAuthContext } from "../contexts/AuthContext";
import { logout as apiLogout } from "../api/auth-api";

export const useLogin = () => {
    const { changeAuthState } = useAuthContext();

    const loginHandler = async (email, password) => {
        try {
            const authData = await login(email, password);
            console.log("Authentication Data:", authData);

            const { _id: userId, email: userEmail, accessToken, username } = authData;

            if (!userId) {
                throw new Error("User ID not found in authentication data.");
            }

            // Store the token in localStorage
            localStorage.setItem('accessToken', accessToken);

            // updated application state
            changeAuthState({ userId, email: userEmail, accessToken, username })
            localStorage.setItem('auth', JSON.stringify({ userId, email: userEmail, username, accessToken }));

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
            const authData = await register(username, email, password);
            console.log("Registration Data:", authData);

            const { _id: userId, email: userEmail, accessToken } = authData;

            if (!userId) {
                throw new Error("User ID not found in registration data.");
            }

            localStorage.setItem('accessToken', accessToken);

            changeAuthState({ userId, email: userEmail, accessToken, username });
            localStorage.setItem('auth', JSON.stringify({ userId, email: userEmail, username, accessToken }));

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