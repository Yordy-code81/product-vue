import authHeader from "@/services/auth_header";
import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost:8090/api/v1',
    headers: authHeader()
    //headers: {'Content-type' : 'application/json'}
})