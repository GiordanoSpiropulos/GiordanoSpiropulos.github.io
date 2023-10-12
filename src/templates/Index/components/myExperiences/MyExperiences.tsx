import React from "react";
import * as S from "./styles";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTranslation } from "react-i18next";
import { MyExperienceLocale } from "./my-experiences.types";
import Theme from "themes/MainTheme";

export function MyExperiences() {
  const { t } = useTranslation();
  const experienceLocale: MyExperienceLocale = t("experience", {
    returnObjects: true,
  });
  return (
    <S.MyExperiencesContainer id="experience">
      <S.MyExperiencesTitle>{experienceLocale.title}</S.MyExperiencesTitle>
      <VerticalTimeline lineColor={Theme.color.primary.main}>
        {experienceLocale.timeline.map((element) => {
          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.dateRange}
              iconStyle={{
                backgroundColor: "#2b2c30",
                alignContent: "center",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                boxShadow: `0 0 0 4px ${Theme.color.primary.main}, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)`,
              }}
              contentStyle={{
                backgroundColor: "#2b2c30",
              }}
              contentArrowStyle={{
                borderRightColor: "#2b2c30",
              }}
              icon={
                <S.DateContainer>
                  <span>{element.date}</span>
                </S.DateContainer>
              }
            >
              <S.VerticalTimelineTitle className="heading">
                {element.title}
              </S.VerticalTimelineTitle>
              <S.VerticalTimelineSubtitle className="subHeading">
                {element.subtitle}
              </S.VerticalTimelineSubtitle>
              <S.VerticalTimelineDescription className="description">
                {element.description}
              </S.VerticalTimelineDescription>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </S.MyExperiencesContainer>
  );
}
