
import { Route, useLocation, Navigate } from "react-router-dom";
import { useAuth } from "./useAuth"

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//     const { authed } = useAuth();
//     const navigate = useNavigate();
//     return(
//         <Route
//             {...rest}
//             render={(props) => {
//                 if (authed) {
//                     return <Component {...rest} {...props} />
//                 } else (
//                     <Navigate to={"/api/auth/signin"} />
//                     // navigate('/api/auth/signin')
//                 )
//             }}
//         />
//     )
// }
const ProtectedRoute = ({ children}) => {
    const { authed } = useAuth();
    const location = useLocation();
    return authed ? children : <Navigate to={"/api/auth/signin" re} />
}

export default ProtectedRoute;