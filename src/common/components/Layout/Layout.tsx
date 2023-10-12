import React from "react";
import { Navbar } from "../index";
import * as S from "./styles";
import { ThemeProvider } from "styled-components";
import Theme from "themes/MainTheme";

export function Layout({ children }: any) {
  return (
    <ThemeProvider theme={Theme}>
      <S.GlobalStyle />
      <Navbar />
      {children}
    </ThemeProvider>
  );
}
