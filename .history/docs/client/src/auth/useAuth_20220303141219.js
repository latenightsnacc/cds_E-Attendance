import React, { useState, createContext, useContext, useEffect } from "react";
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import details from '../pages/Login';

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    let url;
    const navigate = useNavigate();
    const [authed, setAuthed] = useState(false);

    const login = async () => {
        const result = await corperLogin();
        if(result) {
            console.log("Corper has logged in");
            setAuthed(true);
        }
    }
    const logout = async () => {
        const result = await corperLogout();
        if(result) {
            console.log("Corper has logged out");
            setAuthed(false);
        }
    }

    const corperLogin = async (email, password) => {
        try{
            Axios.post("http://localhost:4000/api/auth/signin", {
             email: email,
             password: password
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
            navigate(url);
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