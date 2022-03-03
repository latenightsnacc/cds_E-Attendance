import React, { useState, createContext, useContext, useEffect } from "react";

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

    const corperLogin = async Axios.post("http://localhost:4000/api/auth/signin", {
             email: email,
             password: password
        }).then((response) => {
            if(response){
                console.log(response);
            };
            url = response.data;
        }).then( () => {
            navigate(url);
        })
    }catch(e) {
        console.log(e);
    }
}