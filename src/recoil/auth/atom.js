import { atom } from "recoil";

const loginStorage = atom({
  key: "loginState",
  default: localStorage.getItem("loginData")
    ? JSON.parse(localStorage.getItem("loginData"))
    : null,
});

export const sideBarAtom = atom({
  key: "sideBar",
  default: false,
});

export default loginStorage;
