import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import MemberDashboard from '../dashboard/Member';


const routes  = [
    {
        path:'/api/auth/signin',
        element: Login,
        isPrivate: false
    },
    {
        path: '/api/auth/signup',
        element: Register,
        isPrivate: false
    },
    {
        path: '/dashboard/member',
        element: MemberDashboard
    },
    {
        path: '/*',
        element: NotFound
    }
]

export default routes;