import React from "react";
import * as S from "./styles";
import { useTranslation } from "react-i18next";
import { SkillsLocale } from "./skills-types";

export function Skills() {
  const { t } = useTranslation();
  const indexSkills: SkillsLocale = t("skills", {
    returnObjects: true,
  });

  return (
    <S.SkillsContainer>
      <S.SkillsTitle>{indexSkills.title}</S.SkillsTitle>
      <S.SkillsInnerContainer>
        <S.SkillsInfoContainer>
          <S.SkillsSubTitle>
            {indexSkills.skillsListTitle[0].title}
          </S.SkillsSubTitle>
          <S.SkillsList>
            {indexSkills.skillsListFrontEnd.map((skills) => (
              <S.SkillsListItem key={skills.id}>
                {skills.skillDescription}
              </S.SkillsListItem>
            ))}
          </S.SkillsList>
        </S.SkillsInfoContainer>
        <S.SkillsInfoContainer>
          <S.SkillsSubTitle>
            {indexSkills.skillsListTitle[1].title}
          </S.SkillsSubTitle>
          <S.SkillsList>
            {indexSkills.skillsListBackEnd.map((skills) => (
              <S.SkillsListItem key={skills.id}>
                {skills.skillDescription}
              </S.SkillsListItem>
            ))}
          </S.SkillsList>
        </S.SkillsInfoContainer>
        <S.SkillsInfoContainer>
          <S.SkillsSubTitle>
            {indexSkills.skillsListTitle[2].title}
          </S.SkillsSubTitle>
          <S.SkillsList>
            {indexSkills.skillsListOther.map((skills) => (
              <S.SkillsListItem key={skills.id}>
                {skills.skillDescription}
              </S.SkillsListItem>
            ))}
          </S.SkillsList>
        </S.SkillsInfoContainer>
      </S.SkillsInnerContainer>
    </S.SkillsContainer>
  );
}
