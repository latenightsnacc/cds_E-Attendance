import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';

const PublicRoutes = ({match}) => {
    <div>
        d
        <Route
        path={`${match.path}login`}
        exact component={Login}
         />
    </div>
}
 export default PublicRoutes;