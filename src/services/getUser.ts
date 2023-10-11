import { loginApi } from "../api/loginApi";

export const getUser = async (id: string, token: string) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const response = await loginApi.get(`/user/get-user&id=${id}`, config);

    return response.data;
  } catch (err) {
    return err;
  }
};
