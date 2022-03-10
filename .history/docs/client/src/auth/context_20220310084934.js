import { createContext, useState} from 'react';


export const AuthContext = createContext({
    user: '',
    auth: false
});

const AuthProvider = ({children}) => {
    const {user, setUser ] = useState({
        user: {},
        auth: false
    });
        
    return(
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;