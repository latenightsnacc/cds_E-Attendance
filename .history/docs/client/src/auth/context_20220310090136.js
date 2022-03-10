import { createContext, useState} from 'react';


export const AuthContext = createContext({
    userDetails: null,
    auth: null
});

export const AuthProvider = ({children}) => {
    const [ user, setUser ] = useState(null);
    const [auth, setAuth ] = useState(false)
        
    return(
        <AuthContext.Provider value={{user, setUser, auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

