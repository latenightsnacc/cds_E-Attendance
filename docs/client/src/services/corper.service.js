import Axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'http://localhost:8080/api/dashboard/';


class CorperDataService {

    getMemberDashboard() {
        return Axios.get(`${API_URL}member/`, {headers: authHeader() });
    }

    getSecGenDashboard() {
        return Axios.get(`${API_URL}secretarygeneral/`, {headers: authHeader() });
    }

    getTreasurerDashboard() {
        return Axios.get(`${API_URL}treasurer/`, {headers: authHeader() });
    }

    getPresidentDashboard() {
        return Axios.get(`${API_URL}president/`, {headers: authHeader() });
    }

    // create(data) {
    //     return http.post("/corpers", data);
    //     // console.log(`Corper Data Service: ${data}`);
    // }
    
}


export default new CorperDataService();