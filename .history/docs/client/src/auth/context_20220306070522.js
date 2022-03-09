import { createContext, useState, useEffect} from 'react';
import Axios from 'axios';
import { details } from '../pages/Login';

export const AuthContext = createContext({
    user: {},
    auth: false
});

const AuthProvider = ({children}) => {
    const [user, setUser ] = useState({user:{}, auth: false});

    // useEffect( () => {
        
    //         Axios.post("http://localhost:4000/api/auth/signin", {
    //          email: details.email,
    //          password: details.password
    //         })
    // }, []);
    const login = async() => {
        const result = await handleLogin();
        if(result){
            
        }
    }
    
    const handleLogin = async () => {
        try{
            Axios.post("http://localhost:4000/api/auth/signin", {
              email: details.email,
              password: details.password
             })
        }catch(e){
            console.log(e);
        }
    }
    return(
        <AuthContext.Provider value={{handleLogin}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;