import { loginApi } from "../api/loginApi";

export const resetPassword = async (data: {
  email: string;
  password: string;
}) => {
  try {
    const response = await loginApi.put("/user/reset-password", data);

    console.log(response);

    return response;
  } catch (err) {
    return err;
  }
};
