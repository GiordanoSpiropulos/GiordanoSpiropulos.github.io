import React from "react";
import * as S from "./styles";
import { Presentation } from "./components/presentation/Presentation";

export function IndexTemplate() {
  return (
    <S.IndexMain>
      <Presentation />
    </S.IndexMain>
  );
}
