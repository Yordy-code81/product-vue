import axios from 'axios';
const API_URL = 'https://app-agrochilling-api-221121223323.azurewebsites.net/api/v1/';

class AuthService {
    register(user, typeU) {
        if(typeU == 'teacher'){
            return axios.post(API_URL + typeU + '/auth/sign-up', {
                firstName: user.firstName,
                lastName: user.lastName,
                age: user.age,
                email: user.email,
                password: user.password,
                phone: user.phone,
                directorId: user.directorId
            });
        }else{
            return axios.post(API_URL + typeU + '/auth/sign-up', {
                first_name: user.first_name,
                last_name: user.last_name,
                age: user.age,
                email: user.email,
                farm_address: user.farm_address,
                password: user.password,
                phone: user.phone,
                roles: ["ROLE_SELLER"]
            });
        }
    }

}
export default new AuthService();