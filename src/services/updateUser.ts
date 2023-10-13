import { loginApi } from "../api/loginApi";
import { IUserData } from "../interfaces/userInterface";

export const updateUser = async (data: Partial<IUserData>, token: string) => {
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
