import React, { useState, createContext, useContext, useEffect } from "react";
import Axios from 'axios';

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [authed, setAuthed] = useState(false);

    const login = async () => {
        const result = await corperLogin();
        if(result) {
            console.log("Corper has logged in");
            setAuthed(true);
        }
    }

    const corperLogin = async () => {
        try{

        }catch(e){
            console.log(e);
        }
    }
    
    
}