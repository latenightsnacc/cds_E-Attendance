import React, { useState, createContext, useContext, useEffect } from "react";

const AuthContext = createContext(null);
i
const AuthProvider = ({ children }) => {
    const [authed, setAuthed] = useState(false);
    const login = async () => {
        const result = await corperLogin();
        if(result) {
            console.log("Corper has logged in");
        }
    }
}