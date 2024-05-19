import axios from "axios";

const api = axios.create({
    baseURL: 'https://wicked-points-prove.loca.lt'
})

export default api;