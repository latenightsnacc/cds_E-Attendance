import Axios from "axios";
import authHeader from './auth-header';
const API_URL = "http://localhost:8080/api/dashboard/secretarygeneral/";


class NoteDataService {

    create(data) {
        return Axios.post(`${API_URL}notes`, data, {headers: authHeader() });
    }

    getAll() {
        return Axios.get(`${API_URL}notes`, {headers: authHeader() })
    }

    get(id) {
        return Axios.get(`${API_URL}notes/${id}`, {headers: authHeader() })
    }

    update(id, data) {
        return Axios.get(`${API_URL}notes/${id}`, data, {headers: authHeader() })
    }
}


export default new NoteDataService();