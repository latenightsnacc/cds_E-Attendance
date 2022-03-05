import { createContext, useState} from 'react';


export const AuthContext = createContext({
    user: {},
    auth: false
});

const AuthProvider = ({children}) => {
    const [user, setUser ] = useState({name:{}, auth: false});
    return(
        <AuthContext.Provider value={{user, }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;