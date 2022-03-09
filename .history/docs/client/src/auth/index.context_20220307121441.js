import { createContext, useContext } from "react";

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

export function useAuthState() {
    const context = useContext(AuthStateContext);
    if(context === undefined){
        throw new Error("useAuthState must be used within the AuthProvider.")
    }
    return context;
}