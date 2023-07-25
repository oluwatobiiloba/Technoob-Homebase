import axios from "axios";


const serverApi = axios.create({
    baseURL: 'https://technoob-staging.azurewebsites.net/api/v1/',
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"

    }
});

export default serverApi
