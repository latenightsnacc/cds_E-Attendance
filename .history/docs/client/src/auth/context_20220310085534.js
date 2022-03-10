import { createContext, useState} from 'react';


export const AuthContext = createContext({
    user: '',
    auth: false
});

export const AuthProvider = ({children}) => {
    const [ user, setUser ] = useState([]);
        
    return(
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

