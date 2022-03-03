
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "./useAuth"


const ProtectedRoute = ({ children}) => {
    const { authed } = useAuth();
    const location = useLocation();
    return authed ? children : <Navigate to={"/api/auth/signin"} replace state={{path: location}} />
}

export default ProtectedRoute;