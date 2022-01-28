import axios from 'axios';

let BASE_URL = "http://localhost:8080/api/v1";

let axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'MODE': process.env.MODE,
    },
    withCredentials: true
})

export default axiosInstance;