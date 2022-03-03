import { useAuth } from "./useAuth"

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { authed } = useAuth()
}