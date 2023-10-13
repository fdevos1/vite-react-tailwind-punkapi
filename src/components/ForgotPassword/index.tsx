import { useContext } from "react";

import Modal from "../Modal";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";

import { RecoveryContext } from "../../contexts/recoveryContext";

interface IRecoveryContext {
  activeStep: number;
}

function ForgotPassword({
  openModal,
  closeModal,
}: {
  openModal: boolean;
  closeModal: () => void;
}) {
  const { activeStep } = useContext(RecoveryContext) as IRecoveryContext;

  const renderStep = () => {
    switch (activeStep) {
      case 0:
        return <FirstStep />;
      case 1:
        return <SecondStep />;
      case 2:
        return <ThirdStep />;
    }
  };

  return (
    <Modal open={openModal} onClose={closeModal}>
      <>{renderStep()}</>
    </Modal>
  );
}

export default ForgotPassword;
