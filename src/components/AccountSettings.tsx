import { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import Modal from "./Modal";
import { BeersContext } from "../contexts/beersContext";
import { UserContext } from "../contexts/userContext";
import { updateUser } from "../services/updateUser";

interface IBeerContext {
  accountSettingsModalOpen: boolean;
  handleSettingsCloseModal: () => void;
}

interface IUserContext {
  user: {
    name: string;
    email: string;
    id: number;
  };
  token: string;
}

interface IData {
  email: string;
  name: string;
  password: string;
}

function AccountSettings() {
  const [isEditing, setIsEditing] = useState(false);

  const { register, handleSubmit, setValue } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  const { accountSettingsModalOpen, handleSettingsCloseModal } = useContext(
    BeersContext
  ) as IBeerContext;
  const { user, token } = useContext(UserContext) as IUserContext;

  const onSubmit = (data: Partial<IData>) => {
    updateUser(data, token);
    handleSettingsCloseModal();
  };

  const setFormValues = () => {
    setValue("name", user.name);
    setValue("email", user.email);
  };

  useEffect(() => {
    setFormValues();
  }, [accountSettingsModalOpen]);
  return (
    <Modal open={accountSettingsModalOpen} onClose={handleSettingsCloseModal}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col p-4 gap-4 h-1/2"
      >
        <div className="flex gap-2 justify-between items-center">
          <p className="text-gray-400 font-light text-sm">Name:</p>
          <input
            className={`text-gray-600 text-sm font-semibold p-1 ${
              isEditing ? "border rounded-sm focus:outline-emerald-200" : null
            }`}
            disabled={!isEditing}
            {...register("name")}
          />
        </div>
        <div className="flex gap-2 justify-between items-center">
          <p className="text-gray-400 font-light text-sm whitespace-nowrap">
            E-mail:
          </p>
          <input
            className={`text-gray-600 text-sm font-semibold p-1 ${
              isEditing ? "border rounded-sm focus:outline-emerald-200" : null
            }`}
            disabled={!isEditing}
            {...register("email")}
          />
        </div>
        <div className="flex gap-2 justify-between items-center">
          <p className="text-gray-400 font-light text-sm whitespace-nowrap">
            Pass:
          </p>
          <input
            type="password"
            className={`text-gray-600 text-sm font-semibold p-1 ${
              isEditing ? "border rounded-sm focus:outline-emerald-200" : null
            }`}
            disabled={!isEditing}
            {...register("password")}
          />
        </div>

        <div className="flex justify-center mt-4 gap-4">
          {isEditing ? (
            <>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="bg-gray-300 rounded-sm p-1 text-white hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
              <button className="bg-emerald-200 rounded-sm p-1 text-white hover:bg-emerald-300 transition-colors">
                Confirm
              </button>
            </>
          ) : (
            <button
              type="button"
              className="bg-emerald-200 rounded-sm w-1/2 text-white cursor-pointer"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          )}
        </div>
      </form>
    </Modal>
  );
}

export default AccountSettings;
