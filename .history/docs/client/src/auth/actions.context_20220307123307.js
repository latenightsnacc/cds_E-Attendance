import Axios from "axios";
const ROOT_URL = 'http://localhost:4000/api/auth';

export async function loginUser(dispatch, loginPayload) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(loginPayload);
    };

    try{
        dispatch({ type: 'REQUEST_LOGIN'});
        let response = await Axios.post(`${ROOT_URL}/signin`, requestOptions);
        let data = await response.json();

        if(data.user) {
            dispatch({
                type: 'LOGIN_SUCCESS', payload: data
            });
            localStorage.setItem("currentUser", JSON.stringify(data));
            return data;
        }

        dispatch({
        type: 'LOGIN_ERROR', error: data.errors[0]
        });
        
    }catch(error) {
        dispatch({ type: 'LOGIN_ERROR', error: error})
    }
}

