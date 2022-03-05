import { createContext, useState} from 'react';


export const AuthContext = createContext({
    user: {},
    auth: false
});

const AuthProvider = ({children}) => {
    const [user, setUser ] = useState();
    return(
        <AuthContext.Provider value={{loggedIn, setLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;