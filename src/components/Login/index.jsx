import { useState, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import styled from "styled-components";
import PropTypes from "prop-types";
import { IoMdClose } from "react-icons/io";

import { login } from "../../api";
import loginState from "../../recoil/auth";
import config from "../../config";

function Login({ onClose }) {
  const [isError, setIsError] = useState(false);
  const setLoginState = useSetRecoilState(loginState);

  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: config.CLIENT_ID,
        scope: "email",
      });
    };
    gapi.load("client:auth2", start);
  }, []);

  const handleLogin = async googleData => {
    const { name, email, imageUrl } = googleData.profileObj;
    const { data } = await login({ name, email, profileImageUrl: imageUrl });

    setLoginState(data);
    localStorage.setItem("loginData", JSON.stringify(data));

    onClose();
  };

  const handleFailure = () => {
    setIsError(true);
  };

  return (
    <Wrapper>
      <CloseButton onClick={onClose} />
      {isError ? (
        "로그인 오류!"
      ) : (
        <>
          <LoginTitle>Let Genie Works.</LoginTitle>
          <GoogleLogin
            clientId={config.CLIENT_ID}
            onSuccess={handleLogin}
            onFailure={handleFailure}
          ></GoogleLogin>
        </>
      )}
    </Wrapper>
  );
}

Login.propTypes = {
  onClose: PropTypes.func.isRequired,
};

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

export default Login;
