import Login from '../pages/Login';
import Register from '../pages/Register';
import Not
import MemberDashboard from '../dashboard/Member';


const routes  = [
    {
        path:'/api/auth/signin',
        element: Login
    },
    {
        path: '/api/auth/signup',
        element: Register,
    },
    {
        path: '/dashboard/member',
        element: MemberDashboard
    }
]

export default routes;