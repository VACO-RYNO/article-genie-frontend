import { Route, Routes } from "react-router-dom";

import styled from "styled-components";

import MainPage from "../../pages/MainPage";
import GenieModePage from "../../pages/GenieModePage";
import MyArticlePage from "../../pages/MyArticlePage";

import AppHeader from "../AppHeader";
import ProtectedRoute from "../ProtectedRoute";

function App() {
  return (
    <>
      <AppHeader />
      <Main>
        <Container>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/genie-mode" element={<GenieModePage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/my-article" element={<MyArticlePage />} />
            </Route>
          </Routes>
        </Container>
      </Main>
    </>
  );
}

const Main = styled.main`
  border: 1px solid pink;
`;

const Container = styled.div`
  border: 1px solid pink;
`;

export default App;
