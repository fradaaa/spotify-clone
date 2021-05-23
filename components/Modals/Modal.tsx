import ReactModal from "react-modal";
import { ModalContent, ModalOverlay } from "./style";

ReactModal.defaultStyles = {
  overlay: {},
  content: {},
};

type ModalProps = {
  isOpen: boolean;
  contentLabel: string;
  onRequestClose: (
    e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => void;
  children: React.ReactNode;
};

const Modal = ({
  isOpen,
  contentLabel,
  onRequestClose,
  children,
}: ModalProps) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      contentLabel={contentLabel}
      overlayElement={(props, contentElement) => (
        <ModalOverlay {...props}>{contentElement}</ModalOverlay>
      )}
      contentElement={(props, children) => (
        <ModalContent {...props}>{children}</ModalContent>
      )}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
