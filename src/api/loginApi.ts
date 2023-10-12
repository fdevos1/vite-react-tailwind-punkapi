import axios from "axios";

const loginApi = axios.create({
  // baseURL: "https://backend-desafio-garupa.onrender.com/",
  baseURL: "http://localhost:4000",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS,DELETE,PUT",
    "Access-Control-Allow-Headers":
      "Content-Type, Authorization, X-Requested-With",
  },
});

export { loginApi };
