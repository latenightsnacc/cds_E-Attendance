import React from 'react';
import { Route, Navigate } from "react-router-dom";

import { useAuthState } from '../auth/context.context';

const ProtectedRoute = ({component: Component, path, isPrivate, ...rest}) => {
    const userDetails = useAuthState();

    return(
        <Route
            path={path}
       
            render={ (props) => {
                isPrivate && !Boolean(userDetails.auth) ? (
                    <Navigate
                        to={{pathname: '/api/auth/signin'}} 
                    />
                ) : <Component />
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