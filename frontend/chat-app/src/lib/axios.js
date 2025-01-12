import axios from "axios";

const isDevelopment = window.location.hostname === "localhost";

export const axiosInstance = axios.create(
    {
        baseURL : isDevelopment ? "http://localhost:5001/api" : "/api",
        withCredentials : true,
    }
);
