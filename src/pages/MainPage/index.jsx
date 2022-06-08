import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import AddressBar from "../../components/AddressBar";
import RecentlyViewedSites from "../../components/RecentlyViewedSites";
import RecommendedSites from "../../components/RecommendedSites";

import { isLoginState } from "../../recoil/auth";

function MainPage() {
  const isLogin = useRecoilValue(isLoginState);

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <ErrorBoundary fallbackRender={({ error }) => <div>{error.message}</div>}>
        <Wrapper>
          <AddressBar />
          {isLogin ? <RecentlyViewedSites /> : <RecommendedSites />}
        </Wrapper>
      </ErrorBoundary>
    </Suspense>
  );
}

const Wrapper = styled.div`
  margin-top: 200px;
`;

export default MainPage;
