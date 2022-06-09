import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import styled from "styled-components";

import AddressBar from "../../components/AddressBar";
import GenieModeMain from "../../components/GenieModeMain";
import GenieSideBar from "../../components/GenieSideBar";
import GenieCornerButton from "../../components/GenieCornerButton";

function GenieModePage() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <ErrorBoundary
        FallbackComponent={({ error }) => (
          <div>
            <p>Something went wrong: {error.message}</p>
          </div>
        )}
      >
        <Wrapper>
          <h1>This is Genie Mode Page</h1>
          <AddressBar />
          <GenieModeWrapper>
            <GenieModeMain />
            <GenieSideBar />
            <GenieCornerButton />
          </GenieModeWrapper>
        </Wrapper>
      </ErrorBoundary>
    </Suspense>
  );
}

const Wrapper = styled.div`
  border: solid 1px #00539cff;
`;

const GenieModeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default GenieModePage;
