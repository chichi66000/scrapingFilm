import axios from "axios"

axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    }
})
