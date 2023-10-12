import { loginApi } from "../api/loginApi";

interface IData {
  email: string;
  name: string;
  password: string;
}

export const createNewUser = async (data: IData) => {
  try {
    const response = await loginApi.post("/user/create-user", data);

    return response.data;
  } catch (err) {
    return err;
  }
};
