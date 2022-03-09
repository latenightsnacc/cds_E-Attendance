import { createContext, useState, useEffect} from 'react';
import Axios from 'axios';
import { details } from '../pages/Login';

export const AuthContext = createContext({
    user: {},
    auth: false
});

// export const UserContext = createContext({});
// export const AuthContext = createContext({

// });

const AuthProvider = ({children}) => {
    const [user, setUser ] = useState([]);
    const [auth, setAuth ] = useState(false);
        
    return(
        <AuthContext.Provider value={{user, setUser, auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;