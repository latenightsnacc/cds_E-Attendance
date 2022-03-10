import Axios from 'axios';
import { createContext, useReducer } from 'react';

const ROOT_URL = 'http://localhost:4000/api/auth';

const AuthContext = createContext();

const initialState = {
    userDetails: "",
    auth: false,
    loading: false,
    errorMessage: ""
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            try{
                Axios.post(`${ROOT_URL}/signin`).then(response => {
                    if(response.status === 200) {
                        return {
                            userDetails: state.userDetails = response.data,
                            auth: state.auth = true,
                            loading: state.loading = false
                        }
                    }
                    
                })
            } catch(e) {
                console.log(e);
                return {errorMessage: state.errorMessage = e}
            }
            break;
        case 'LOGOUT':
            return {
                userDetails: state.userDetails = "",
                auth: state.auth = false
            }
        default:
            throw new Error();
    }
}

const AuthProvider = ({children}) => {
    const [user, dispatch] = useReducer(reducer, initialState);

    return(
        <AuthContext.Provider value={{user, dispatch, reducer, i}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;