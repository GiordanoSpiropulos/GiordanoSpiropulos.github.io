import React from "react";
import { useTranslation } from "react-i18next";
import * as S from "./styles";
import { IndexAboutMe } from "./index-types";
import { Typewriter } from "../../common/components";
import { StaticImage } from "gatsby-plugin-image";

export function IndexTemplate() {
  const { t } = useTranslation();
  const indexAboutMe: IndexAboutMe[] = t("aboutMe", { returnObjects: true });
  const todayYear = new Date().getFullYear();
  const workStarted = new Date("09/10/2020").getFullYear();
  return (
    <S.IndexMain>
      <S.IndexContainer>
        <div></div>
        <div>
          <S.GreenContainer>
            <span>{indexAboutMe[0].cargo}</span>
          </S.GreenContainer>
          <S.PresentationContainer>
            <S.PresentationInnerContainer>
              <Typewriter
                delay={100}
                text={indexAboutMe[0].presentation}
                fontSize="32px"
              ></Typewriter>
              <span>{indexAboutMe[0].presentation2}</span>
            </S.PresentationInnerContainer>
            <S.PresentationExperience>
              <span>
                <S.WhiteExperienceBold>
                  {(todayYear - workStarted).toString()}{" "}
                </S.WhiteExperienceBold>
              </span>
              <span>{indexAboutMe[0].experience}</span>
            </S.PresentationExperience>
          </S.PresentationContainer>
        </div>
      </S.IndexContainer>
      <S.ImageContainer>
        <S.Orbit>
          <S.ImageCircle bottom="10%" left="20%">
            <StaticImage
              style={{ borderRadius: "50%" }}
              objectFit={"contain"}
              src="../../../static/images/react.webp"
              alt="Giordano"
            />
          </S.ImageCircle>
          <S.ImageCircle bottom="10%" right="20%">
            <StaticImage
              style={{ borderRadius: "50%" }}
              objectFit={"contain"}
              src="../../../static/images/js.webp"
              alt="Giordano"
            />
          </S.ImageCircle>
          <S.ImageCircle top="0%" left="45%">
            <StaticImage
              style={{ borderRadius: "50%" }}
              objectFit={"contain"}
              src="../../../static/images/angular.webp"
              alt="Giordano"
            />
          </S.ImageCircle>
        </S.Orbit>

        <S.BackgroundCircle>
          <StaticImage
            style={{ borderRadius: "50%" }}
            objectFit={"contain"}
            src="../../../static/images/giordano.webp"
            alt="Giordano"
          />
        </S.BackgroundCircle>
      </S.ImageContainer>
    </S.IndexMain>
  );
}
