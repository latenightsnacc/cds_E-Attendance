import { createContext, useState} from 'react';


export const AuthContext = createContext({
    userDetails: null,
    auth: false
});

export const AuthProvider = ({children}) => {
    const [ user, setUser ] = useState({
        userDetails: '',
        auth: false
    });
        
    return(
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

