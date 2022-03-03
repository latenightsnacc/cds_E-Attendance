import { Route } from "react-router-dom";
import { useAuth } from "./useAuth"

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { authed } = useAuth();
    return(
        <Route
            {...rest}
            render={(props) => {
                if (authed) {
                    return <Component
                }
            }}
    )
}