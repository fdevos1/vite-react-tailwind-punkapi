import axios from "axios";

const punkApi = axios.create({
  baseURL: "https://api.punkapi.com/v2/",
});

export { punkApi };
