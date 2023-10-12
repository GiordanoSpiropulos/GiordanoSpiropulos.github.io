import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Roboto Mono';
  font-weight: 100 700;
  font-display: swap;
  src: local('Roboto Mono'),url(/fonts/RobotoMono-VariableFont_wght.ttf) format('truetype');
  
}

body,html{
    margin: 0px;
    font-family: 'Roboto Mono';
    background-color: #2b2f32;
  

}

a{
    text-decoration: none;
}

`;

export const column = css`
  display: flex;
  flex-direction: column;
`;
export const WhiteContainer = styled.div`
  ${column}
  width: 100%;
  @media (min-width: 1366px) {
    max-width: 1366px;
    margin: 0px auto;
  }
`;
