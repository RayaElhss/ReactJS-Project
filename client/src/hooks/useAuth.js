import { login, logout, register } from "../api/auth-api"
import { useAuthContext } from "../contexts/AuthContext";

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
            localStorage.setItem('userId', userId);
            localStorage.setItem('email', userEmail);
            localStorage.setItem('username', username);

            // updated application state
            changeAuthState({ userId, email: userEmail, accessToken, username })

            return authData;
        } catch (error) {
            console.error("Login failed:", error);
            throw error;
        }

    };

    return loginHandler;
};

export const useRegister = () => {
    const { changeAuthState } = useContext(AuthContext);

    const registerHandler = async (username, email, password) => {
        try {
            const authData = await register(username, email, password);
            console.log("Registration Data:", authData);

            const { _id: userId, email: userEmail, accessToken } = authData;

            if (!userId) {
                throw new Error("User ID not found in registration data.");
            }

            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('userId', userId);
            localStorage.setItem('email', userEmail);
            localStorage.setItem("username", username);

            changeAuthState({ userId, email: userEmail, accessToken, username })

            return authData;
        } catch (error) {
            console.error("Registration failed:", error);
            throw error;
        }


    };

    return registerHandler;
}

export const useLogout = () => {
    const { changeAuthState } = useContext(AuthContext);

    const logoutHandler = async () => {
        const token = localStorage.getItem('accessToken');
        console.log("Logging out with token:", token);

        try {
            if (token) {
                await logout(token);
                console.log("Logout successful");
            } else {
                console.error("No access token found.");
            }

            localStorage.removeItem('accessToken');
            localStorage.removeItem('userId');
            localStorage.removeItem('email');
            localStorage.removeItem('username');


            changeAuthState({});
        } catch (error) {
            console.error("Failed to logout:", error);
        }

    }
    return logoutHandler;
};