import React, { useState, createContext, useContext, useEffect } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [authed, setAuthed] = useState(false);
    const login = async () => {
        
    }
}