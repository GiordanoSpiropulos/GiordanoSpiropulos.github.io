import styled, { createGlobalStyle } from "styled-components";

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

export const WhiteContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 1366px) {
    max-width: 1366px;
    margin: 0px auto;
  }
`;
