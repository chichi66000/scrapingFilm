import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "https://scrapingfilm-production.up.railway.app/api",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    }
})
export default axiosInstance