import axios from "axios"
//"https://dummyjson.com"
const AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL  
});

export default AxiosInstance;