import { useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "./context";


const ProtectedRoute = ({ children}) => {
    const [loggedIn, setLo] = useAuth();
    const location = useLocation();
    return authed === true ? children : <Navigate to={"/api/auth/signin"} replace state={{path: location}} />
}

export default ProtectedRoute;