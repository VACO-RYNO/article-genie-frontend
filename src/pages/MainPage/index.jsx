import styled from "styled-components";

import SearchBar from "../../components/SearchBar";
import SiteList from "../../components/SiteList";

function MainPage() {
  return (
    <Wrapper>
      <h1>This is MainPage</h1>
      <SearchBar />
      <SiteList />
    </Wrapper>
  );
}

export default MainPage;

const Wrapper = styled.div`
  border: solid 1px #00539cff;
`;
