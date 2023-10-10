import { punkApi } from "../api/punkApi";

export const getBeers = async () => {
  try {
    const response = await punkApi.get("/beers?per_page=80");

    return response.data;
  } catch (err) {
    return err;
  }
};
