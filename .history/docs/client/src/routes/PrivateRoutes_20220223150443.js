import React from 'react';
import { Route, Link } from 'react-router-dom';
import { uniqBy } from 'lod';
import roles from '../config/rolesConfig';
import * as Routes from '../index'
const userRoles = [
    ...['coordinator', 'manager',],
    'member'
];
let allowedRoutes = userRoles.reduce( (acc, role) => {
    return [
        ...acc,
        ...roles[role].routes
    ]
}, []);

allowedRoutes =
const PrivateRoutes = ({match}) => {

}

export default PrivateRoutes;