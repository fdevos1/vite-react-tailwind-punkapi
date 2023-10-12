import Modal from "./Modal";

function ForgotPassword({
  openModal,
  closeModal,
}: {
  openModal: boolean;
  closeModal: () => void;
}) {
  return (
    <Modal open={openModal} onClose={closeModal}>
      <p>Hello World</p>
    </Modal>
  );
}

export default ForgotPassword;
