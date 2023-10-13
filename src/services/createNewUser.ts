import { loginApi } from "../api/loginApi";
import { IUserData } from "../interfaces/userInterface";

export const createNewUser = async (data: IUserData) => {
  try {
    const response = await loginApi.post("/user/create-user", data);

    return response.data;
  } catch (err) {
    return err;
  }
};
