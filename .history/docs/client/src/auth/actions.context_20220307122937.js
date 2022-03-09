import Axios from "axios";
const ROOT_URL = 'http://localhost:4000';

export async function loginUser(dispatch, loginPayload) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(loginPayload);
    };

    try{
        dispatch({ type: 'REQUEST_LOGIN'});
        let response = await 
    }catch(error) {
        dispatch({ type: 'LOGIN_ERROR', error: error})
    }
}

