import React from 'react';
import { Route, Link } from 'react-router-dom';
import roles from '../config/rolesConfig';
import * as Routes from '../index'
const userRoles = [
    ...['coordinator', 'manager',],
    'member'
];
let allowedRoutes = userRoles.reduce( (acc, role) => )
const PrivateRoutes = ({match}) => {

}

export default PrivateRoutes;