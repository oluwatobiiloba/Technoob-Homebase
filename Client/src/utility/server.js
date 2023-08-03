import axios from "axios";


const serverApi = axios.create({
    baseURL: 'https://technoob-staging.azurewebsites.net/api/v1/',
    withCredentials: true,
});

serverApi.defaults.headers.common["Content-Type"] = "application/json";
export default serverApi
