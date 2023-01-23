import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    width: 100%;
    min-height: 100vh;
    font-family: 'League Spartan', sans-serif;
    /* font-family: 'Antonio', sans-serif; */
}
`;

export default GlobalStyles;