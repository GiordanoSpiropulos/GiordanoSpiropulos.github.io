import React from "react";
import * as S from "./styles";
import { Presentation, AboutMe, MyExperiences, Skills } from "./components";

export function IndexTemplate() {
  return (
    <S.IndexMain>
      <Presentation />
      <AboutMe />
      <MyExperiences />
      <Skills />
    </S.IndexMain>
  );
}
