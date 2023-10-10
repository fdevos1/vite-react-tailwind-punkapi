import { punkApi } from "../api/punkApi";

export const getOneBeer = async (id: string) => {
  try {
    const response = await punkApi.get(
      `https://api.punkapi.com/v2/beers/${id}`
    );

    return response.data;
  } catch (err) {
    return err;
  }
};
