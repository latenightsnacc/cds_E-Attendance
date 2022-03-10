import { createContext, useState} from 'react';


export const AuthContext = createContext({
    userDetails: null,
    auth: null
});

export const AuthProvider = ({children}) => {
    const [ user, setUser ] = useState(null);
        
    return(
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

