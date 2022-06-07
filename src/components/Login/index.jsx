import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import PropTypes from "prop-types";

function Login({ onClose }) {
  return (
    <Wrapper>
      <CloseButton onClick={onClose} />
      <LoginTitle>Let Genie Works.</LoginTitle>
      <ModalButton type="button">Sign in with Google</ModalButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  align-items: center;
`;

const CloseButton = styled(IoMdClose)`
  position: absolute;
  top: 6.57%;
  left: 90.6%;
  width: 20px;
  height: 20px;
`;

const LoginTitle = styled.div`
  color: #ff5cb0;
  font-size: 36px;
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

Login.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Login;
