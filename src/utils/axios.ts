import axios from 'axios';

let BASE_URL = ""

let axiosInstance  = axios.create({
    baseURL: BASE_URL,
    headers: {'MODE': process.env.MODE}
})

export default axiosInstance;