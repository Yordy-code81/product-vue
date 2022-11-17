import axios from 'axios';
const API_URL = 'http://localhost:8090/api/v1/';

class AuthService {
    login(user, typeU) {
        return axios.post(API_URL + typeU + '/auth/sign-in', {
            email: user.email,
            password: user.password
        })
    }
}
export default new AuthService();