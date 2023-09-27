import React from "react";
import * as S from "./styles";
import { Presentation, AboutMe, MyExperiences, Skills } from "./components";
import { ContactForm } from "./components/contactForm/ContactForm";

export function IndexTemplate() {
  return (
    <S.IndexMain>
      <Presentation />
      <AboutMe />
      <MyExperiences />
      <Skills />
      <ContactForm />
    </S.IndexMain>
  );
}
