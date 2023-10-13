import { useContext, useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Modal from "./Modal";

import { IUserData } from "../interfaces/userInterface";
import { createNewUser } from "../services/createNewUser";
import { AuthContext } from "../contexts/authContext";
import { createUserValidation } from "../utils/validation";

interface IAuthContext {
  signIn: (a: string, b: string) => void;
  error: { message: string; status: number } | undefined;
}

function CreateNewUser({
  openModal,
  closeModal,
}: {
  openModal: boolean;
  closeModal: () => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: yupResolver(createUserValidation),
  });

  const [error, setError] = useState("");

  const { signIn } = useContext(AuthContext) as IAuthContext;

  const onSubmit = async (data: IUserData) => {
    const createUser = await createNewUser(data);

    if (createUser.response && createUser.response.status === 409) {
      setError(createUser.response.data.message);
    }

    const { email, password } = data;

    signIn(email, password);
  };

  const hasErrors = errors.email || errors.name || errors.password;

  return (
    <Modal open={openModal} onClose={closeModal}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center gap-4 md:gap-8"
      >
        <div className="flex flex-col items-start">
          <p className="text-lg font-semibold text-gray-700">
            Create your account
          </p>
          <span className="text-sm font-light text-gray-600">
            and discover new beers or learn everything about your loved ones
          </span>
        </div>

        <div className="flex flex-col gap-2 lg:gap-4">
          <div className="flex flex-col h-[50px]">
            <input
              className={`text-gray-600 text-sm font-semibold p-1 border rounded-sm focus:outline-emerald-200`}
              placeholder={"Enter your name"}
              {...register("name")}
            />

            {errors.name && (
              <span className="text-sm text-red-400">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="flex flex-col h-[50px]">
            <input
              className={`text-gray-600 text-sm font-semibold p-1 border rounded-sm focus:outline-emerald-200
              ${error !== "" ? "border-red-400" : null}
              `}
              placeholder={"Enter your e-mail"}
              {...register("email")}
            />
            {errors.email && (
              <span className="text-sm text-red-400">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="flex flex-col h-[50px]">
            <input
              className={`text-gray-600 text-sm font-semibold p-1 border rounded-sm focus:outline-emerald-200`}
              placeholder={"Enter your password"}
              type="password"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-sm text-red-400">
                {errors.password.message}
              </span>
            )}
          </div>

          {error && <span className="text-sm text-red-400">{error}</span>}
        </div>

        <button
          disabled={hasErrors ? true : false}
          type="submit"
          className={`self-center p-1 w-1/2 bg-emerald-200 text-white rounded-sm ${
            hasErrors ? "hover:bg-emerald-200" : "hover:bg-emerald-400"
          } transition-colors`}
        >
          Submit
        </button>
      </form>
    </Modal>
  );
}

export default CreateNewUser;
