import React from 'react';
import { Route, Navigate } from "react-router-dom";

import { useAuthState } from '../auth/context.context';

const ProtectedRoute = ({component: Component, path, isAuth, ...rest}) => {
    const userDetails = useAuthState();

    return(
        <Route
            path={path}
       
            render={ () => {
                
                 if (isAuth) {
                     return <Component />
                 } else {
                     return(
                         <Navigate to={ {pathname: "/", state:{from: props.location}}} />
                     )
                 }
            }}
            {...rest}
        />
    )
}

export default ProtectedRoute;