import { useContext } from "react";
import { useForm } from "react-hook-form";

import { resetPassword } from "../../services/resetPassword";

import { RecoveryContext } from "../../contexts/recoveryContext";
import { AuthContext } from "../../contexts/authContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { passwordValidation } from "../../utils/validation";

interface IRecoveryContext {
  email: string;
}

interface IAuthContext {
  signIn: (a: string, b: string) => void;
}

function ThirdStep() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(passwordValidation),
  });

  const { email } = useContext(RecoveryContext) as IRecoveryContext;

  const { signIn } = useContext(AuthContext) as IAuthContext;

  const onSubmit = async (data: {
    newPassword: string;
    confirmNewPassword: string;
  }) => {
    const { newPassword, confirmNewPassword } = data;

    if (newPassword === confirmNewPassword) {
      await resetPassword({ password: newPassword, email });
    }

    signIn(email, newPassword);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col h-80 justify-between items-center"
    >
      <div className="flex flex-row text-sm font-medium text-gray-400">
        <p>Choose your new password</p>
      </div>

      <div className="flex flex-col gap-4 w-[240px]">
        <div className="flex flex-col gap-1 h-[50px]">
          <input
            type="password"
            {...register("newPassword")}
            className={`border p-2 rounded-sm ${
              errors.newPassword
                ? "border-red-400  focus:outline-red-400"
                : "hover:border-emerald-100 focus:outline-emerald-100"
            }`}
            placeholder="New password"
          />
          {errors.newPassword && (
            <span className="text-sm text-red-400">
              {errors.newPassword.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1 h-[50px]">
          <input
            type="password"
            {...register("confirmNewPassword")}
            className={`border p-2 rounded-sm ${
              errors.confirmNewPassword
                ? "border-red-400  focus:outline-red-400"
                : "hover:border-emerald-100 focus:outline-emerald-100"
            }`}
            placeholder="Confirm your new password"
          />
          {errors.confirmNewPassword && (
            <span className="text-sm text-red-400">
              {errors.confirmNewPassword.message}
            </span>
          )}
        </div>
      </div>

      <div>
        <button className="w-full px-4 py-1 bg-emerald-200 text-white rounded-sm hover:bg-emerald-400 ">
          Submit
        </button>
      </div>
    </form>
  );
}

export default ThirdStep;
