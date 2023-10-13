import { ReactNode, createContext, useState } from "react";
import { recoveryPass } from "../services/recoveryPass";

export const RecoveryContext = createContext({});

export const RecoveryProvider = ({ children }: { children: ReactNode }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState<number | null>(null);
  const [error, setError] = useState(false);

  const handleNext = () => {
    if (!error) {
      setActiveStep((step) => step + 1);
    }
  };

  const createOtpCode = async () => {
    const otp = Math.floor(Math.random() * 9000 + 1000);

    setOtp(otp);

    const response: any = await recoveryPass({ email, otp });

    if (response.status !== 200) {
      setError(true);
    } else {
      handleNext();
    }
  };

  return (
    <RecoveryContext.Provider
      value={{
        email,
        setEmail,
        otp,
        error,
        createOtpCode,
        activeStep,
        handleNext,
      }}
    >
      {children}
    </RecoveryContext.Provider>
  );
};
