import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

function PublicRoute({ element: Component, restricted, ...rest }) {
    const { isAuthenticated } = useAuthContext();

    return isAuthenticated && restricted ? (
        <Navigate to="/" replace />
    ) : (
        <Component {...rest} />
    );
}

export default PublicRoute;