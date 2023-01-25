import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Navigate, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import BurgerMenu from "./components/BurgerMenu";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import Background from "./img/background-stars.svg";
import Planet from "./pages/Planet";

function App() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <>
      <GlobalStyles />
      <HelmetProvider>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Antonio&family=League+Spartan:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
      </HelmetProvider>

      <MainContainer>
        <Header showMenu={showMenu} setShowMenu={setShowMenu} />
        {showMenu ? <BurgerMenu /> : null}

        <Routes>
          <Route path="/" element={<Navigate to="/mercury" />} />
          <Route path="/:name" element={<Planet />} />
        </Routes>
      </MainContainer>
    </>
  );
}

export default App;

const MainContainer = styled.div`
  padding-top: 16px;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
`;
