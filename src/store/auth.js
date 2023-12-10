import axios from 'axios';

export default {
    authLogin(user, password) {
        let response = axios.post(import.meta.env.VITE_API_URL + 'api/users/login', { 'user': user, 'password': password })
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));

        return response;
    },
    authRegister(user, email, password){
        let response = axios.post(import.meta.env.VITE_API_URL + 'api/users/create', { 'user': user, 'email': email, 'password': password })
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));

        return response;
    }
};
