import React from "react";
import Axios from 'axios';
import { createContext, useReducer} from 'react';
import { details } from "../pages/Login";

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
            console.log(details);
            try{
                Axios.post(`${ROOT_URL}/signin`, {
                    email: details.email,
                    password: details.password
                }).then(response => {
                    console.log(re)
                    //  if(response.status === 200) {
                    //      return {
                    //          userDetails: state.userDetails = response.data,
                    //          auth: state.auth = true,
                    //          loading: state.loading = false
                    //      }
                    //  }
                    
                 })
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
                    errorMessage: state.errorMessage = 'An error occured.'
                }
            }
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