import React from 'react';
import { Route, Navigate } from "react-router-dom";

import { useAuthState } from '../auth/context.context';

const ProtectedRoute = ({component: Component, path, isPrivate, ...rest}) => {
    const userDetails = useAuthState();

    return(
        <Route
            path={path}
       
            render={ (props) => {
                isPrivate && !Boolean(use)
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