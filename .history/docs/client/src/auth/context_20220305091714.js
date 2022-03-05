import { createContext, useContext, useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {
    const [loggedIn, setLoggedIn] = useState(false);
    return(
        <AuthContext.Provider value={{loggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;