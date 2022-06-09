import { useRecoilState } from "recoil";

import modalState from "../../recoil/modal/atom";
import ConfirmModal from "../ConfirmModal";
import Profile from "../Profile";
import ProfileModal from "../ProfileModal";
import Modal from "../Modal";
import Login from "../Login";

function GlobalModal() {
  const { modalType, modalProps } = useRecoilState(modalState)[0] || {};

  if (modalType === "ProfileModal") {
    return (
      <ProfileModal>
        <Profile />
      </ProfileModal>
    );
  }

  if (modalType === "LoginModal") {
    return (
      <Modal>
        <Login />
      </Modal>
    );
  }

  if (modalType === "ShareModal") {
    return <ConfirmModal>{modalProps.message}</ConfirmModal>;
  }

  if (modalType === "LinkModal") {
    return <ConfirmModal>{modalProps.message}</ConfirmModal>;
  }

  return <></>;
}

export default GlobalModal;
