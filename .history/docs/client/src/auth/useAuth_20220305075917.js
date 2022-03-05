import React, { useState, createContext, useContext } from "react";
import Axios from 'axios';
import { useNavigate, Navigate, useLocation } from "react-router-dom";
import {details} from '../pages/Login';

const AuthContext = createContext();

function useAuth() {
    const [authed, setAuthed] = useState(false);

    return {
        authed,
        const login: async () => {
            const result = await corperLogin();
            if(result) {
                console.log("Corper has logged in");
                setAuthed(true);
            }
        },
    }
}

const AuthProvider = ({ children }) => {
    let url;
    const navigate = useNavigate();
    
    const { state } = useLocation();

    
    const logout = async () => {
        const result = await corperLogout();
        if(result) {
            console.log("Corper has logged out");
            setAuthed(false);
        }
    }

    const corperLogin = async () => {
        try{
            Axios.post("http://localhost:4000/api/auth/signin", {
             email: details.email,
             password: details.password
            }).then(response => {
                if(response){
                    console.log(response);
                    url = response.data;
                }
            }).then( () => {
                navigate(url);
            })
        }catch(e){
            console.log(e);
        }
    }

    
    const corperLogout = async e => {
        Axios.get('http://localhost:4000/api/auth/signout').then(response => {
            if(response){
                console.log(response);
                url = response.data;
            }
        }).then(() => {
            navigate(state?.path || url);
        })
    }
    return(
        <AuthContext.Provider value={ {authed, setAuthed, login, logout}} >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;