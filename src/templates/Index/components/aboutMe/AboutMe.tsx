import React from "react";
import * as S from "./styles";
import { useTranslation } from "react-i18next";
import { WhatIDoCards, AboutMeLocale } from "./about-me-types";

export function AboutMe() {
  const { t } = useTranslation();
  const aboutMeLocale: AboutMeLocale = t("aboutMe", {
    returnObjects: true,
  });

  return (
    <S.AboutMeContainer id="aboutMe">
      <S.WhatIDoContainer>
        {aboutMeLocale.whatIDoCards.map(
          (aboutMeCard: WhatIDoCards, index: number) => (
            <S.WhatIDoCard id={`${aboutMeCard.title}_${index}`}>
              <S.WhatIDoTitle>{aboutMeCard.title}</S.WhatIDoTitle>
              <S.WhatIDoExtra>{aboutMeCard.extra}</S.WhatIDoExtra>
            </S.WhatIDoCard>
          )
        )}
      </S.WhatIDoContainer>
      <S.WhoIAmContainer>
        <S.WhoIAmTitle>{aboutMeLocale.whoIAm.title}</S.WhoIAmTitle>
        <S.WhoIAmSubtitle>{aboutMeLocale.whoIAm.subtitle}</S.WhoIAmSubtitle>
        <S.WhoIAmAbout>{aboutMeLocale.whoIAm.infoAboutMe}</S.WhoIAmAbout>
      </S.WhoIAmContainer>
    </S.AboutMeContainer>
  );
}
