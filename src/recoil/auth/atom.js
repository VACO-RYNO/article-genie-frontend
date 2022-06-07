import { atom } from "recoil";

const loginState = atom({
  key: "loginState",
  default: localStorage.getItem("loginData")
    ? JSON.parse(localStorage.getItem("loginData"))
    : null,
});

export default loginState;
