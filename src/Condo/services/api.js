import axios from "axios";

const api = axios.create({
    baseURL: "https://condo.wiremockapi.cloud"
})

export default api;