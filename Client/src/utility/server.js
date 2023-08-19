import axios from "axios";


const serverApi = axios.create({
    baseURL: 'https://technoob-staging.azurewebsites.net/api/v1/',
    withCredentials: true,
});

serverApi.defaults.headers.common["Content-Type"] = "application/json";

serverApi.requiresAuth = function (requiresToken){
    if(requiresToken){
        const userToken = sessionStorage.getItem('user_token');
        serverApi.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
        return null
    }

    return null

}
export default serverApi
