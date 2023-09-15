import React from "react";
import * as S from "./styles";
import { Presentation } from "./components/presentation/Presentation";
import { AboutMe } from "./components/aboutMe/AboutMe";
import { MyExperiences } from "./components/myExperiences/MyExperiences";

export function IndexTemplate() {
  return (
    <S.IndexMain>
      <Presentation />
      <AboutMe />
      <MyExperiences />
    </S.IndexMain>
  );
}
