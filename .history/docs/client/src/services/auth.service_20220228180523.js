import Axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
    login(email, password) {
        return Axios
        .post(API_URL+"signin", {
            email,
            password
        })
        .then(response => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
                
            }
            return response.data;
        });
    }
    
    logout()  {
        localStorage.removeItem("user");
    }
    
    register(data) {
        return Axios.post(API_URL+"signup", data);
    }
    
    getCurrentUser (){
        return JSON.parse(localStorage.getItem("user"));
    }
}



export default new AuthService();