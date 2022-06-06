import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

import Modal from "../Modal";

function AppHeader({ isLogin }) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const handleProfileClick = () => {
    setIsProfileModalOpen(true);
  };

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  return (
    <Wrapper>
      {isProfileModalOpen && (
        <Modal onClose={() => setIsProfileModalOpen(false)}>
          My Article / Logout
        </Modal>
      )}
      {isLoginModalOpen && (
        <Modal onClose={() => setIsLoginModalOpen(false)}>
          Let Genie Works.
          <ModalButton type="button">Sign in with Google</ModalButton>
        </Modal>
      )}
      <h1>This is AppHeader</h1>
      <Link to={"/"}>
        <img alt="genie-logo"></img>
      </Link>
      {isLogin ? (
        <img alt="user-profile" onClick={handleProfileClick}></img>
      ) : (
        <button onClick={handleLoginClick}>Login</button>
      )}
    </Wrapper>
  );
}

AppHeader.propTypes = {
  isLogin: PropTypes.bool.isRequired,
};

const Wrapper = styled.div`
  border: solid 1px #00539cff;
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

export default AppHeader;
