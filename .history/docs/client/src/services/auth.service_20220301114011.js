import Axios from "axios";

const API_URL = "http://localhost:4000/api/auth/";

class AuthService {
    logout()  {
        localStorage.removeItem("user");
    }
    
    register(data) {
        return Axios.post(API_URL+"signup", data);
    }
    login(email);

    getCurrentUser (){
        return JSON.parse(localStorage.getItem("user"));
    }
}



export default new AuthService();