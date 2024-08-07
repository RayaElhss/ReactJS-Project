import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useLogout } from "../../hooks/useAuth";

export default function Logout() {
    const logout = useLogout();

    useEffect(() => {
        const performLogout = async () => {
            try {
                await logout(); // Ensure logout logic is completed
                // Navigate will automatically redirect after logout
            } catch (error) {
                console.error("Logout failed:", error);
            }
        };

        performLogout();  // Call the logout logic on component mount
    }, [logout]);

    return <Navigate to="/" />

}