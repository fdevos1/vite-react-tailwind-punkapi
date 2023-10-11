import axios from "axios";

const loginApi = axios.create({
  baseURL: "https://stormy-wasp-sheath-dress.cyclic.app",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS,DELETE,PUT",
  },
});

export { loginApi };
