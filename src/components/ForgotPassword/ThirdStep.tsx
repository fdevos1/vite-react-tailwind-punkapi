import { useContext } from "react";
import { useForm } from "react-hook-form";

import { resetPassword } from "../../services/resetPassword";

import { RecoveryContext } from "../../contexts/recoveryContext";
import { AuthContext } from "../../contexts/authContext";

interface IRecoveryContext {
  email: string;
}

interface IAuthContext {
  signIn: (a: string, b: string) => void;
}

function ThirdStep() {
  const { register, handleSubmit } = useForm();

  const { email } = useContext(RecoveryContext) as IRecoveryContext;

  const { signIn } = useContext(AuthContext) as IAuthContext;

  const onSubmit = async (data) => {
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
        <input
          type="password"
          {...register("newPassword")}
          className={`text-gray-600 text-base font-semibold  p-2 border rounded-sm focus:outline-emerald-400 `}
          placeholder="New password"
        />
        <input
          type="password"
          {...register("confirmNewPassword")}
          className={`text-gray-600 text-base font-semibold  p-2 border rounded-sm focus:outline-emerald-400 `}
          placeholder="Confirm your new password"
        />
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
