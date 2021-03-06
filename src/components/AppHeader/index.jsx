import { useState } from "react";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";

import Heading from "../shared/Heading";

import logo from "../../assets/images/genie-logo.png";
import { isLoginState } from "../../recoil/auth";
import useModal from "../../hooks/useModal";
import Modal from "../Modal";

function AppHeader() {
  const { showModal } = useModal();
  const isLogin = useRecoilValue(isLoginState);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const handleProfileClick = () => {
    showModal({
      modalType: "ProfileModal",
    });
  };

  const handleLoginClick = () => {
    showModal({
      modalType: "LoginModal",
    });
  };

  const handleShareButtonClick = async e => {
    e.preventDefault();

    if (!isLogin) {
      handleLoginClick();
      return;
    }

    await navigator.clipboard.writeText(window.location.href);
    setIsConfirmModalOpen(true);
  };

  return (
    <Header>
      {isConfirmModalOpen && (
        <Modal onClose={() => setIsConfirmModalOpen(false)}>
          링크가 복사되었습니다.
        </Modal>
      )}

      <Link to={"/"}>
        <Brand>
          <img src={logo} alt="genie-logo"></img>
          <Heading>Genie.</Heading>
        </Brand>
      </Link>
      {window.location.pathname.includes("genie-mode") && (
        <img alt="공유 버튼" onClick={handleShareButtonClick}></img>
      )}
      {isLogin ? (
        <ProfileIcon onClick={handleProfileClick} />
      ) : (
        <LoginButton onClick={handleLoginClick}>Login</LoginButton>
      )}
    </Header>
  );
}

const Header = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  width: 100%;
  height: 67px;
  top: 0;
  border: 1px solid #e6e6e6;

  a {
    text-decoration: none;
    color: #000000;
  }
`;

const LoginButton = styled.button`
  position: absolute;
  right: 29px;
  width: 100px;
  height: 20px;
`;

const Brand = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;

  h1 {
    margin-left: 10px;
    font-style: italic;
    color: #6466ff;
    font-size: 28px;
  }

  img {
    width: 60px;
    height: 41px;
  }
`;

const ProfileIcon = styled(BsPersonCircle)`
  position: absolute;
  right: 29px;
  width: 40px;
  height: 40px;
  color: #bcbcbc;
`;

export default AppHeader;
