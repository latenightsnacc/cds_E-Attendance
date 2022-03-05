import { createContext, useState} from 'react';
import Axios from 'axios';
import { details } from '../pages/Login';

export const AuthContext = createContext({
    user: {},
    auth: false
});

const AuthProvider = ({children}) => {
    const [user, setUser ] = useState({user:{}, auth: false});

    const sumbitLogin = async () => {
        
        try{
            await Axios.post("http://localhost:4000/api/auth/signin", {
             email: details.email,
             password: details.password
            }).then(response => {
                console.log(response);
                if(response.status === 200){
                    
                }
            })
            .then(() => {
                console.log(user);
            })
        }catch(e){
            console.log(e);
        }
        
    }
    const handleLogin = await sumbitLogin
    return(
        <AuthContext.Provider value={{user, handleLogin}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;