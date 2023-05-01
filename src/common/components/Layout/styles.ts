import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Montserrat';
  font-weight: 100 700;
  font-display: swap;
  src: url(/fonts/Montserrat-VariableFont_wght.ttf) format("ttf");
}
*{
    font-family: 'Montserrat';
}
body,html{
    margin: 0px;
}

a{
    text-decoration: none;
}
`;
