import { loginApi } from "../api/loginApi";

export const recoveryPass = async ({
  email,
  otp,
}: {
  email: string;
  otp: number;
}) => {
  try {
    const response = await loginApi.post(`/user/reset-password`, {
      email,
      otp,
    });

    return response;
  } catch (err) {
    return err;
  }
};
