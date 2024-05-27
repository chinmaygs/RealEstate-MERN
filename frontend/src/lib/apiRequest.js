import axios from "axios";
axios.defaults.withCredentials = true;

const apiRequest = axios.create({
    baseURL:"https://realestate-mern-nt9u.onrender.com",
    withCredentials: true,
});

export default apiRequest;
