import { createContext, useState, useEffect} from 'react';
import Axios from 'axios';
import { details } from '../pages/Login';

export const AuthContext = createContext({
    user: {},
    auth: false
});

const AuthProvider = ({children}) => {
    const [user, setUser ] = useState({user:{}, auth: false});

    useEffect( () => {

    })
    const sumbitLogin = async () => {
        
        
        
    }
    const handleLogin = () => {
        console.log('hello');
    }
    return(
        <AuthContext.Provider value={{user, handleLogin}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;