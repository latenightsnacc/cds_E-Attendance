import { useLocation, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context";


const ProtectedRoute = ({ children}) => {
    const [loggedIn, setLoggedIn] = useContext();
    const location = useLocation();
    return authed === true ? children : <Navigate to={"/api/auth/signin"} replace state={{path: location}} />
}

export default ProtectedRoute;