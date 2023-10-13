import { useContext } from "react";
import { RecoveryContext } from "../../contexts/recoveryContext";

interface IRecoveryContext {
  email: string;
  setEmail: (newState: string) => void;
  error: boolean;
  createOtpCode: () => void;
}

function FirstStep() {
  const { email, setEmail, error, createOtpCode } = useContext(
    RecoveryContext
  ) as IRecoveryContext;

  return (
    <div className="flex flex-col h-80 items-center justify-between">
      <p className="text-gray-800 text-xl">Enter your e-mail below:</p>

      <div className="flex flex-col h-[50px] w-[240px] md:w-[300px]">
        <input
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`text-gray-600 text-base font-semibold ${
            error
              ? "border-red-400 focus:outline-red-400"
              : "focus:outline-emerald-400"
          } p-2 border rounded-sm `}
        />

        {error && (
          <span className="text-base font-light text-red-400">
            Oh-oh something went wrong! Try again
          </span>
        )}
      </div>

      <button
        disabled={email === "" ? true : false}
        type="button"
        onClick={(e) => {
          e.preventDefault();
          createOtpCode();
        }}
        className="w-1/2 p-1 bg-emerald-200 text-white rounded-sm hover:bg-emerald-400"
      >
        Send e-mail
      </button>
    </div>
  );
}

export default FirstStep;
