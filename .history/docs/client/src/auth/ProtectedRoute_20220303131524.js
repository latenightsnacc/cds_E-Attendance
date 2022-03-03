import { Route, useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "./useAuth"

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { authed } = useAuth();
    const navigate = useNavigate();
    return(
        <Route
            {...rest}
            render={(props) => {
                if (authed) {
                    return <Component {...rest} {...props} />
                } else (
                    <Navigate to={""} />
                    navigate('/api/auth/signin')
                )
            }}
        />
    )
}

export default ProtectedRoute;