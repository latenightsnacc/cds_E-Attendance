import Axios from 'axios';

const ROOT_URL = 'http://localhost:4000/api/auth';

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
                            auth: true,
                            loading: false
                        }
                    }
                    
                })
            } catch(e) {
                console.log(e);
                
            }
    }
}
