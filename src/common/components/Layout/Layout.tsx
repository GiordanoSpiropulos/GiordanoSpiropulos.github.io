import React from "react";
import { Navbar } from "../index";
import * as S from "./styles";
import { ThemeProvider } from "styled-components";
import Theme from "themes/MainTheme";
import { I18nextProvider } from "react-i18next";

export function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
