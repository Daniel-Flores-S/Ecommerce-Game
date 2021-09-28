import axios from "axios";

const url = "http://localhost:8080/api/v1";

export const ApiService = axios.create({
    baseURL: url,

    headers: {
        "Content-Type": "application/json",
    },
});
