import styled from "styled-components";

import AddressBar from "../../components/AddressBar";
import SiteList from "../../components/SiteList";

function MainPage() {
  return (
    <Wrapper>
      <h1>This is MainPage</h1>
      <AddressBar />
      <SiteList />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: solid 1px #00539cff;
`;

export default MainPage;
