import { useReducer } from "react";

let user = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")).user : "";

let auth = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")).auth_token : "";

export const initialState = {
    userDetails : "" || user,
    auth: "" || auth,
    loading: false,
    errorMessage: null
}

export const AuthReducer = (initialState, action) => {
    switch (action.type) {
        case "REQUEST_LOGIN":
            return {
                ...initialState,
                loading: true
            };
        case "LOGIN_SUCCESS":
            return
    }
}