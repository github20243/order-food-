import { createPortal } from "react-dom";
import styled from "styled-components";

const StyledModal = styled("div")`
  background-color: #fff;
  border-radius: 12px;
  padding: 40px 32px;
  position: fixed;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledBackdrop = styled("div")`
  position: fixed;
  background-color: #222;
  opacity: 0.8;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
`;

const ModalContent = ({ children }) => {
  return <StyledModal>{children}</StyledModal>;
};

const Backdrop = ({ onClose }) => {
  return <StyledBackdrop onClick={onClose}></StyledBackdrop>;
};

const Modal = ({ children, onClose }) => {
  return createPortal(
    <>
      <ModalContent>{children}</ModalContent>
      <Backdrop onClose={onClose} />
    </>,
    document.getElementById("modal-overlay")
  );
};

export default Modal;
