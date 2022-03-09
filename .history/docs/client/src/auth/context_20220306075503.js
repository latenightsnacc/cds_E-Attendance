import { createContext, useState, useEffect} from 'react';
import Axios from 'axios';
import { details } from '../pages/Login';

// export const AuthContext = createContext({
//     user: {},
//     auth: false
// });

export const UserContext = createContext({});
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user, setUser ] = useState({});
    const [auth, setAuth ] = useState(false);
        
    // const handleLogin = async () => {
    //     try{
    //         Axios.post("http://localhost:4000/api/auth/signin", {
    //           email: details.email,
    //           password: details.password
    //          })
    //     }catch(e){
    //         console.log(e);
    //     }
    // }
    return(
        <AuthContext.Provider value={{user, setUser,}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;