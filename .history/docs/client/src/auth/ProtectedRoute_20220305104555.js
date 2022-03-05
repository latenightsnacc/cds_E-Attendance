import { useLocation, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context";


const ProtectedRoute = ({ children}) => {
    const {user, setUser} = useContext(AuthContext);
    const location = useLocation();
    return loggedIn === true ? children : <Navigate to={"/api/auth/signin"} replace state={{path: location}} />
}

export default ProtectedRoute;