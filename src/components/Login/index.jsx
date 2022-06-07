import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import PropTypes from "prop-types";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";

import { login } from "../../api";
import loginState from "../../recoil/auth/atom";

function Login({ onClose }) {
  const [error, setError] = useState(null);
  const [loginData, setLoginData] = useRecoilState(loginState);

  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: "email",
      });
    };
    gapi.load("client:auth2", start);
  }, []);

  const handleLogin = async googleData => {
    const { name, email, imageUrl } = googleData.profileObj;
    const { data } = await login({ name, email, profileImageUrl: imageUrl });

    setLoginData(data);
    localStorage.setItem("loginData", JSON.stringify(data));

    onClose();
  };

  const handleFailure = error => {
    setError(error);
  };

  return (
    <Wrapper>
      <CloseButton onClick={onClose} />
      {error ? (
        "로그인 오류!"
      ) : (
        <>
          <LoginTitle>Let Genie Works.</LoginTitle>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            onSuccess={handleLogin}
            onFailure={handleFailure}
          ></GoogleLogin>
        </>
      )}
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

Login.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Login;
