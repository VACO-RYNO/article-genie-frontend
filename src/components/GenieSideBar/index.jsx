import { useRecoilState } from "recoil";

import styled from "styled-components";

import { sideBarAtom } from "../../recoil/auth/atom";

function GenieSideBar() {
  const [isSideBarOpen, setIsSideBarOpen] = useRecoilState(sideBarAtom);

  return (
    <SideBar sidebar={isSideBarOpen}>This is right sidebar content</SideBar>
  );
}

const SideBar = styled.div`
  transition: all 200ms ease-in 0s;
  position: relative;
  ${props => (props.sidebar ? `flex: 0 0 40%;` : `flex: 0 0 0px;`)}
  overflow: hidden scroll;
  overflow-y: scroll;
  height: 80vh;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.05);
`;

export default GenieSideBar;
