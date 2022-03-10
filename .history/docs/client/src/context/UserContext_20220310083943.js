import React from "react";
import Axios from 'axios';
import { createContext, useReducer} from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import { details } from "../pages/Login";


const ROOT_URL = 'http://localhost:4000/api/auth';

const initialState = {
    userDetails: 'Hello world',
    auth: false,
    loading: false,
    errorMessage: ""
}

let res;

const reducer = async (state = initialState, action) => {
    
    
    switch (action.type) {
        case 'REQUEST_LOGIN':
            console.log(details);
            try{
                res = await Axios.post(`${ROOT_URL}/signin`, {
                    email: details.email,
                    password: details.password
                })
                if(res.status === 200) {
                    return {
                        ...state,
                        userDetails:  action.payload.user,
                        auth: state.auth = false,
                        loading: false
                    }
                        
                }
            console.log(...state) 
            } catch(e) {
                console.log(e);
                return {
                    ...state,
                    errorMessage: state.errorMessage = e}
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