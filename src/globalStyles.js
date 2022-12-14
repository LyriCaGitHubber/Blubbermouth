import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, *:before, *:after {
    box-sizing: border-box;
}
    body {
        margin: 0;
        padding: 0;
        background: white;
        font-family: Open-Sans, Helventica, Sans-Serif;
    }
`;

export default GlobalStyle;
