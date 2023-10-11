import axios from "axios";

const loginApi = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS,DELETE,PUT",
  },
});

export { loginApi };
