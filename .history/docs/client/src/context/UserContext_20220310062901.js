import React from "react";
import Axios from 'axios';
import { createContext, useReducer, useState } from 'react';

const ROOT_URL = 'http://localhost:4000/api/auth';

const initialState = {
    userDetails: "",
    auth: false,
    loading: false,
    errorMessage: ""
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'REQUEST_LOGIN':
            try{

            }catch(e){
                console.log(e)
                return {errorMessage: state.errorMessage = e}
            }
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