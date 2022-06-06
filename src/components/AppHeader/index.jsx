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

export default AppHeader;

const Wrapper = styled.div`
  border: solid 1px #00539cff;
`;
