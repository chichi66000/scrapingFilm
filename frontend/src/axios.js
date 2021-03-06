import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "http://localhost:3001/api",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    }
})
export default axiosInstance