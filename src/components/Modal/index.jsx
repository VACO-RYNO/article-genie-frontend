import ReactDom from "react-dom";

import styled from "styled-components";

export default function Modal({ children, onClose }) {
  return ReactDom.createPortal(
    <ModalOverlay onClick={onClose}>
      <ModalContainer>
        {children}
        <ModalButton type="button" onClick={onClose}>
          Sign in with Google
        </ModalButton>
      </ModalContainer>
    </ModalOverlay>,
    document.getElementById("portal"),
  );
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 900;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 3em;
  border-radius: 20px;
  z-index: 1000;
`;

const ModalButton = styled.div`
  background-color: #7e80ff;
  opacity: 0.5;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    outline: 1px solid #ff5cb0;
    opacity: 0.8;
    font-weight: 700;
  }
`;
