import React from 'react';
import Login from '../pages/Login';
import Register from '../pages/Register';
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
    
]