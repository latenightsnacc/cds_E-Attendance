import { createContext, useState} from 'react';


export const AuthContext = createContext({
    user: {},
});

const AuthProvider = ({children}) => {
    const [loggedIn, setLoggedIn ] = useState(false);
    return(
        <AuthContext.Provider value={{loggedIn, setLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;