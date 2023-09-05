import React, { useState } from "react";
import * as S from "./styles";
import { DropdownProps } from "./dropdown-types";

export function Dropdown(props: DropdownProps) {
  return (
    <S.DropdownContainer>
      {props.isMenuVisible && <S.DropdownMenu>{props.children}</S.DropdownMenu>}
    </S.DropdownContainer>
  );
}
