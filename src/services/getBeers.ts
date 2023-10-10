import { punkApi } from "../api/punkApi";

export const getBeers = async () => {
  try {
    const response = await punkApi.get("/beers");

    return response.data;
  } catch (err) {
    return err;
  }
};
