import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

function PrivateRoute({ element: Component, ...rest }) {
    const { isAuthenticated } = useAuthContext();
    const location = useLocation();

    return isAuthenticated ? (
        <Component {...rest} />
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default PrivateRoute;