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
  const colors = ['#419EBB', '#F7CC7F', '#545BFE', '#FF6A45', '#ECAD7A', '#FCCB6B', '#65F0D5', '#497EFA'];

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
        {showMenu ? <BurgerMenu setShowMenu={setShowMenu} colors={colors} /> : null}

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
