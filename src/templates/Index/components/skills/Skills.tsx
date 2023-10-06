import React, { useState, useEffect, useRef } from "react";
import * as S from "./styles";
import { useTranslation } from "react-i18next";
import { SkillsLocale } from "./skills-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { StaticQuery, graphql } from "gatsby";

export function Skills() {
  const [isInViewport, setIsInViewPort] = useState<boolean>(false);
  const listRef = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsInViewPort(entry.isIntersecting));
    });

    observer.observe(listRef.current);
    return () => observer.unobserve(listRef?.current);
  }, []);

  const { t } = useTranslation();
  const indexSkills: SkillsLocale = t("skills", {
    returnObjects: true,
  });

  return (
    <StaticQuery
      query={graphql`
        query Skills {
          skillImage: allFile(
            filter: {
              extension: { regex: "/(webp)/" }
              base: { regex: "/(white)/" }
            }
          ) {
            edges {
              node {
                id
                base
                childImageSharp {
                  gatsbyImageData(
                    width: 70
                    height: 70
                    placeholder: BLURRED
                    formats: [WEBP]
                  )
                }
              }
            }
          }
        }
      `}
      render={(data: any) => {
        return (
          <S.SkillsContainer ref={listRef}>
            <S.SkillsTitle>{indexSkills.title}</S.SkillsTitle>
            <S.SkillsDescription>{indexSkills.subtitle}</S.SkillsDescription>
            <S.SkillsDescription>{indexSkills.description}</S.SkillsDescription>
            <S.SkillsInnerContainer>
              <S.SkillsInfoContainer>
                <S.SkillsList>
                  {indexSkills.skillsList.map((skills, index) => (
                    <S.SkillsListItem
                      isInViewPort={isInViewport}
                      key={skills.id}
                    >
                      <GatsbyImage
                        alt={data.skillImage.edges[index].node.base}
                        image={
                          data.skillImage.edges[index].node.childImageSharp
                            ?.gatsbyImageData
                        }
                      />
                      {skills.skillDescription}
                    </S.SkillsListItem>
                  ))}
                </S.SkillsList>
              </S.SkillsInfoContainer>
            </S.SkillsInnerContainer>
          </S.SkillsContainer>
        );
      }}
    />
  );
}
