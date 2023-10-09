import React from "react";
import { Navbar } from "../index";
import * as S from "./styles";

export function Layout({ children }: any) {
  return (
    <>
      <S.GlobalStyle />
      <Navbar />
      {children}
    </>
  );
}
