import { createContext, useContext, useState} from 'react';


export const AuthContext = createContext({});

const AuthProvider = ({children}) => {
    const [loggedIn, setLoggedIn] = useState(false);
    return(
        <AuthContext.Provider value={{loggedIn, setLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;