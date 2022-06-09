import { useRecoilState } from "recoil";

import styled from "styled-components";

import { sideBarAtom } from "../../recoil/auth/atom";

import HTMLContainer from "../HTMLContainer";

function GenieModeMain() {
  const [isSideBarOpen, setIsSideBarOpen] = useRecoilState(sideBarAtom);

  return (
    <>
      <GenieMain sidebar={isSideBarOpen}>
        <h2>This will be the HTML page</h2>
        <HTMLContainer />
      </GenieMain>
    </>
  );
}

const GenieMain = styled.div`
  ${props => (props.sidebar ? `flex: 0 0 60%;` : `flex: 0 0 100%;`)}
  overflow: hidden scroll;
  overflow-y: scroll;
  transition: all 200ms ease-in 0s;
  display: flex;
  flex-direction: column;
  height: 80vh;
  border: solid 1px pink;
`;

export default GenieModeMain;
