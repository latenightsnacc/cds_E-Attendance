import React from "react";
import Axios from 'axios';
import { createContext, useReducer, useState } from 'react';

const ROOT_URL = 'http://localhost:4000/api/auth';

const initialState = {
    userDetails: "",
    auth: false,
    loading: false,
    errorMessage: ""
}

let response;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_LOGIN':
            try{
                response = Axios.post(`${ROOT_URL}/signin`)//then(response => {
                //     if(response.status === 200) {
                //         return {
                //             userDetails: state.userDetails = response.data,
                //             auth: state.auth = true,
                //             loading: state.loading = false
                //         }
                //     }
                    
                // })
            } catch(e) {
                console.log(e);
                return {errorMessage: state.errorMessage = e}
            }
            break; 
        case 'LOGIN_SUCCESSFUL':
            if(response.status === 200) {
                return {
                    userDetails: state.userDetails = response.data,
                    auth: state.auth = true,
                    loading: state.loading = false
                }
            } else {
                return {
                    
                    loading: state.loading = false,
                    errorMessage
                }
            }
            break;
        case 'LOGOUT':
            return {
                userDetails: state.userDetails = "",
                auth: state.auth = false
            }
        default:
            throw new Error();
    }
}

export const UserContext = createContext({
    state: initialState,
    dispatch: null
})

export const UserProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <UserContext.Provider value={{state, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}