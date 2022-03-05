import { createContext, useState} from 'react';


export const AuthContext = createContext({});

const AuthProvider = ({children}) => {
    
    return(
        <AuthContext.Provider value={{loggedIn, setLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;