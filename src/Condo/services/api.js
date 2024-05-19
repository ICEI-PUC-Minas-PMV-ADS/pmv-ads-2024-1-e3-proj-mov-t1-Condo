import axios from "axios";

const api = axios.create({
    baseURL: 'https://condo.loca.lt'
})

export default api;