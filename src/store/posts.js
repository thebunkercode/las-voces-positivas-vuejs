import axios from 'axios';
export default {
    getPosts(page){
        let response = axios.get(import.meta.env.VITE_API_URL + 'api/posts/list?page='+page)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return response;
    }
};
