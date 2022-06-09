import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import styled from "styled-components";

import Modal from "../Modal";
import Login from "../Login";
import MyArticlesModal from "../MyArticlesModal";
import MyArticlesList from "../MyArticlesList";

import isLoginState, { sideBarAtom } from "../../recoil/auth/atom";

function GenieCornerButton() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useRecoilState(sideBarAtom);

  const [isMyArticlesModalOpen, setIsMyArticlesModalOpen] = useState(false);

  const isLogin = useRecoilValue(isLoginState);

  const handleNewArticleClick = () => {
    if (!isLogin) {
      return setIsLoginModalOpen(true);
    }

    if (isSideBarOpen) {
      return setIsSideBarOpen(false);
    }

    return setIsMyArticlesModalOpen(true);
  };

  return (
    <Wrapper>
      {isLoginModalOpen && (
        <Modal onClose={() => setIsLoginModalOpen(false)}>
          <Login onClose={() => setIsLoginModalOpen(false)} />
        </Modal>
      )}
      {isMyArticlesModalOpen && (
        <MyArticlesModal onClose={() => setIsMyArticlesModalOpen(false)}>
          <MyArticlesList setIsMyArticlesModalOpen={setIsMyArticlesModalOpen} />
        </MyArticlesModal>
      )}
      <CornerButton onClick={handleNewArticleClick}>
        {isSideBarOpen ? "Close SideBar Button" : "New Article Button"}
      </CornerButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: solid 1px #00539cff;
`;

const CornerButton = styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 80px;
  height: 80px;
  border-radius: 15px;
  background-color: #7e80ff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  :hover {
    border: solid 3px pink;
  }
`;

export default GenieCornerButton;
