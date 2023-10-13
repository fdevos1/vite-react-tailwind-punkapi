import { useState, useEffect, useContext } from "react";
import { recoveryPass } from "../../services/recoveryPass";
import { RecoveryContext } from "../../contexts/recoveryContext";

interface IRecoveryContext {
  email: string;
  otp: number;
  handleNext: () => void;
}

function SecondStep() {
  const [timerCount, setTimer] = useState(60);
  const [otpInput, setOtpInput] = useState([0, 0, 0, 0]);
  const [disable, setDisable] = useState(true);

  const { email, otp, handleNext } = useContext(
    RecoveryContext
  ) as IRecoveryContext;

  const verifyOtp = () => {
    if (parseInt(otpInput.join("")) === otp) {
      handleNext();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((lastTimerCount) => {
        lastTimerCount <= 1 && clearInterval(interval);
        if (lastTimerCount <= 1) setDisable(false);
        if (lastTimerCount <= 0) return lastTimerCount;
        return lastTimerCount - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [disable]);

  useEffect(() => {
    verifyOtp();
  }, [otpInput]);

  const resendOtp = async () => {
    await recoveryPass({ email, otp });
  };

  return (
    <div className="flex flex-col h-80 justify-between">
      <div className="flex flex-col items-center justify-center text-center gap-4">
        <div className="flex flex-row text-sm font-medium text-gray-400">
          <p>We have sent a code to your email</p>
        </div>

        <div className="w-full">
          <div className="flex flex-col space-y-16">
            <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
              <div className="w-12 h-12 ">
                <input
                  maxLength={1}
                  className="w-full h-full flex flex-col items-center justify-center text-center px-2 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                  type="text"
                  name=""
                  id=""
                  onChange={(e) =>
                    setOtpInput([
                      parseInt(e.target.value),
                      otpInput[1],
                      otpInput[2],
                      otpInput[3],
                    ])
                  }
                ></input>
              </div>
              <div className="w-12 h-12 ">
                <input
                  maxLength={1}
                  className="w-full h-full flex flex-col items-center justify-center text-center px-2 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                  type="text"
                  name=""
                  id=""
                  onChange={(e) =>
                    setOtpInput([
                      otpInput[0],
                      parseInt(e.target.value),
                      otpInput[2],
                      otpInput[3],
                    ])
                  }
                ></input>
              </div>
              <div className="w-12 h-12 ">
                <input
                  maxLength={1}
                  className="w-full h-full flex flex-col items-center justify-center text-center px-2 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                  type="text"
                  name=""
                  id=""
                  onChange={(e) =>
                    setOtpInput([
                      otpInput[0],
                      otpInput[1],
                      parseInt(e.target.value),
                      otpInput[3],
                    ])
                  }
                ></input>
              </div>
              <div className="w-12 h-12 ">
                <input
                  maxLength={1}
                  className="w-full h-full flex flex-col items-center justify-center text-center px-2 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                  type="text"
                  name=""
                  id=""
                  onChange={(e) =>
                    setOtpInput([
                      otpInput[0],
                      otpInput[1],
                      otpInput[2],
                      parseInt(e.target.value),
                    ])
                  }
                ></input>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
            <p>Didn't recieve code?</p>{" "}
            <a
              className={`flex flex-row items-center ${
                disable
                  ? "text-gray-500 "
                  : "text-emerald-200 cursor-pointer underline"
              }`}
              onClick={() => resendOtp()}
            >
              {disable ? `Resend OTP in ${timerCount}s` : "Resend OTP"}
            </a>
          </div>
        </div>
      </div>

      <div>
        <button className="border rounded-sm bg-gray-300 text-white p-2">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default SecondStep;
