import axios from 'axios';
const API_URL = 'https://app-agrochilling-api-221121223323.azurewebsites.net/api/v1/';

class AuthService {
    login(user, typeU) {
        return axios.post(API_URL + typeU + '/auth/sign-in', {
            email: user.email,
            password: user.password
        })
    }
}
export default new AuthService();