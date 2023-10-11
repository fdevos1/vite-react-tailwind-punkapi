import { punkApi } from "../api/punkApi";

export const getSingleBeer = async (id: string) => {
  try {
    const response = await punkApi.get(`/beers/${id}`);

    return response.data;
  } catch (err) {
    return err;
  }
};
