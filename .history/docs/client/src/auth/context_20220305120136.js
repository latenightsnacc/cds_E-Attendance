import { createContext, useState} from 'react';
import Axios from 'axios';

export const AuthContext = createContext({
    user: {},
    auth: false
});

const AuthProvider = ({children}) => {
    const [user, setUser ] = useState({user:{}, auth: false});

    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            await Axios.post("http://localhost:4000/api/auth/signin", {
             email: email,
             password: password
            }).then(response => {
                setUser(() => ({
                    user: response,
                    auth: true 
                 }));
                if(response){
                    console.log(response);
                    if(response.status === 200){
                        // setUser(() => ({
                        //     user: response.data,
                        //     auth: true 
                        //  }));
                        setUser({
                            ...user,
                            user: response.data,
                            auth:true
                        })
                    }
                    url = `/api/dashboard/member`;
                    
                }
                
            })
            .then(() => {
                console.log(user);
                // if(user.auth === true){
                //     navigate(url);
                // }
                
            })
        }catch(e){
            console.log(e);
        }
        
    }
    return(
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;