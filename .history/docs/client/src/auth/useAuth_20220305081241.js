import React, { useState, createContext, useContext } from "react";
import Axios from 'axios';
import { useNavigate, Navigate, useLocation } from "react-router-dom";
import {details} from '../pages/Login';

const AuthContext = createContext();

const useAuth = () => {
    const [authed, setAuthed] = useState(false);
    let url;
    const navigate = useNavigate();
    
    const { state } = useLocation();
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

    const corperLogout = async () => {
        Axios.get('http://localhost:4000/api/auth/signout').then(response => {
            if(response){
                console.log(response);
                url = response.data;
            }
        }).then(() => {
            navigate(state?.path || url);
        })
    }

    return {
        authed,
        login: async () => {
            const result = await corperLogin();
            if(result) {
                console.log("Corper has logged in");
                setAuthed(true);
            }
        },
        logout: async () => {
            const result = await corperLogout();
            if(result) {
                console.log("Corper has logged out");
                setAuthed(false);
            }
        },
    }
}

export const AuthProvider = ({ children }) => {
    const auth = useAuth();
    
    return(
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

// export const useAuth = () => useContext(AuthContext);
// export default AuthProvider;
export default function AuthConsumer