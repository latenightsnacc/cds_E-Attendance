import Axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
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