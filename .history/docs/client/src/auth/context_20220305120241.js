import { createContext, useState} from 'react';
import Axios from 'axios';
import { details } from '../pages/Login';

export const AuthContext = createContext({
    user: {},
    auth: false
});

const AuthProvider = ({children}) => {
    const [user, setUser ] = useState({user:{}, auth: false});

    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            await Axios.post("http://localhost:4000/api/auth/signin", {
             email: details.email,
             password: details.password
            }).then(response => {
                setUser(() => ({
                    user: response,
                    auth: true 
                 }));
                if(response){
                    console.log(response);
                    
                    url = `/api/dashboard/member`;
                    
                }
                
            })
            .then(() => {
                console.log(user);
                // if(user.auth === true){
                //     navigate(url);
                // }
                
            })
        }catch(e){
            console.log(e);
        }
        
    }
    return(
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;