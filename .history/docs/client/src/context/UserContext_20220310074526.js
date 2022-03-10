import React from "react";
import Axios from 'axios';
import { createContext, useReducer} from 'react';
import { details } from "../pages/Login";

const ROOT_URL = 'http://localhost:4000/api/auth';

const initialState = {
    userDetails: null,
    auth: false,
    loading: false,
    errorMessage: ""
}

let res;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_LOGIN':
            console.log(details);
            try{
                res = Axios.post(`${ROOT_URL}/signin`, {
                    email: details.email,
                    password: details.password
                })
                if(res.status === 200) {
                    
                state.userDetails = res.data
                state.auth = true
                state.loading = false
                    
                }
                console.log(res)
                console.log(state.auth)
            } catch(e) {
                console.log(e);
                return {errorMessage: state.errorMessage = e}
            }
            break; 
        case 'LOGIN_SUCCESSFUL':
            if(res.status === 200) {
                return {
                    userDetails: state.userDetails = res.data,
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