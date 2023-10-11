import { punkApi } from "../api/punkApi";

export const getRandomBeer = async () => {
  try {
    const response = await punkApi.get(`/beers/random`);

    return response.data;
  } catch (err) {
    return err;
  }
};
