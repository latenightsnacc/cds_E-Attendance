import React, { useState, createContext, useContext } from "react";
import Axios from 'axios';
import { useNavigate, Navigate, useLocation } from "react-router-dom";
import {details} from '../pages/LoginOld';

const ROOT_URL = 'http://localhost:4000/api/auth';

let user = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")).user : "";

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

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
const AuthProvider = ({ children }) => {
    const [user, dispatch] = useReducer(AuthReducer, i)  
    return(
        <AuthContext.Provider value={ {authed, setAuthed, login, logout}} >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;