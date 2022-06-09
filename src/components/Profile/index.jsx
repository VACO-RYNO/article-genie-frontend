import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";

import loginState from "../../recoil/auth";
import useModal from "../../hooks/useModal";

function Profile() {
  const setLoginState = useSetRecoilState(loginState);
  const navigate = useNavigate();
  const { hideModal } = useModal();

  const handleLogout = () => {
    localStorage.clear();
    setLoginState(null);

    hideModal();
    navigate("/");
  };

  return (
    <Wrapper>
      <Link to={"/my-article"}>
        <MyArticleButton onClick={hideModal}>마이 아티클</MyArticleButton>
      </Link>
      <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 200px;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  width: 82px;
  height: 30px;
  border-radius: 4px;
`;
const MyArticleButton = styled(Button)`
  background: #7e80ff;
  border: 1px solid #7e80ff;
  color: white;
`;

const LogoutButton = styled(Button)`
  background: #e6e6e6;
  border: 1px solid #e6e6e6;
  color: black;
`;

export default Profile;
