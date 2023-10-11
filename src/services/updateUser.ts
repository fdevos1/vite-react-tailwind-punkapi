import { loginApi } from "../api/loginApi";

interface IData {
  email: string;
  name: string;
  password: string;
}

export const updateUser = async (data: Partial<IData>, token: string) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const response = await loginApi.put("/user/update-user", data, config);

    return response.data;
  } catch (err) {
    return err;
  }
};
