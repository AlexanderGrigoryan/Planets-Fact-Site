import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";

function App() {
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

      <MainContainer></MainContainer>
    </>
  );
}

export default App;

const MainContainer = styled.div``;
