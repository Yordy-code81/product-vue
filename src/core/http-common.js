import authHeader from "@/services/auth_header";
import axios from "axios";

export default axios.create({
    baseURL: 'https://app-agrochilling-api-221121223323.azurewebsites.net/api/v1',
    headers: authHeader()
    //headers: {'Content-type' : 'application/json'}
})