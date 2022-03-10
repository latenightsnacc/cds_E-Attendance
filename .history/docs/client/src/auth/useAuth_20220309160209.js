import React, { useState, createContext, useContext } from "react";
import Axios from 'axios';
import { useNavigate, Navigate, useLocation } from "react-router-dom";
import {details} from '../pages/LoginOld';

const ROOT_URL = 'http://localhost:4000/api/auth';

const AuthContext = createContext(null);

const initialState = {
    userDetails: "",
    auth: false,
    loading: false,
    errorMessage: null
}

const AuthReducer = (initialState, action) => {
    switch (action.type) {
        case "REQUEST_LOGIN":
            return {
                ...initialState,
                loading: true
            };
        case "LOGIN_SUCCESS":
            return {
                ...initialState,
                user: action.payload.user,
                auth: true,
                loading: false
            };
        case "LOGOUT":
            return {
                ...initialState,
                user: "",
                auth: false
            };
        case "LOGIN_ERROR":
            return {
                ...initialState,
                loading: false,
                errorMessage: action.error
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}
const AuthProvider = ({ children }) => {
    let url;
    const navigate = useNavigate();
    const [authed, setAuthed] = useState(false);
    const { state } = useLocation();

    // const login = async () => {
    //     const result = await corperLogin();
    //     if(result) {
    //         console.log("Corper has logged in");
    //         setAuthed(true);
    //     }
    // }
    // const logout = async () => {
    //     const result = await corperLogout();
    //     if(result) {
    //         console.log("Corper has logged out");
    //         setAuthed(false);
    //     }
    // }

    // const corperLogin = async () => {
    //     try{
    //         Axios.post("http://localhost:4000/api/auth/signin", {
    //          email: details.email,
    //          password: details.password
    //         }).then(response => {
    //             if(response){
    //                 console.log(response);
    //                 url = response.data;
    //             }
    //         }).then( () => {
    //             navigate(url);
    //         })
    //     }catch(e){
    //         console.log(e);
    //     }
    // }

    
    // const corperLogout = async e => {
    //     Axios.get('http://localhost:4000/api/auth/signout').then(response => {
    //         if(response){
    //             console.log(response);
    //             url = response.data;
    //         }
    //     }).then(() => {
    //         navigate(state?.path || url);
    //     })
    // }

    const loginUser = async (dispatch, loginPayload) => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(loginPayload)
        };

        
        try{
            dispatch({ type: 'REQUEST_LOGIN'});
            let response = await Axios.post(`${ROOT_URL}/signin`, requestOptions);
            let data = await response.json();

            if(data.user) {
                dispatch({
                    type: 'LOGIN_SUCCESS', payload: data
                });
                localStorage.setItem("currentUser", JSON.stringify(data));
                return data;
            }

            dispatch({
            type: 'LOGIN_ERROR', error: data.errors[0]
            });
            return;
        }catch(error) {
            dispatch({ type: 'LOGIN_ERROR', error: error})
        }
    }

    const logout = async (dispatch) => {
        dispatch({ type: 'LOGOUT'});
        localStorage.removeItem('currentUser');
    
    }
    return(
        <AuthContext.Provider value={ {authed, setAuthed, login, logout}} >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;