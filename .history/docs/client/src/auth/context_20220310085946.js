import { createContext, useState} from 'react';


export const AuthContext = createContext({
    userDetails: '',
    auth: false
});

export const AuthProvider = ({children}) => {
    const [ user, setUser ] = useState({
        details: '',
        auth: false
    });
        
    return(
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

