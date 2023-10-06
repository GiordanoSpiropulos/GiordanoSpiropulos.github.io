import { fadeInUp } from "@animations/fade-animation";
import styled, { css, keyframes } from "styled-components";

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 16px;
  min-height: 100vh;
  background-color: #2b2f32;
  @media (max-width: 992px) {
    justify-content: space-evenly;
  }
`;

export const SkillsTitle = styled.h2`
  color: #fff;
  font-size: 28px;
  align-self: center;
`;

export const SkillsDescription = styled.span`
  color: #fff;
  align-self: center;
  margin-bottom: 16px;
  text-align: center;
  width: 50%;
`;

export const SkillsInnerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
`;

export const SkillsInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  height: 200px;
  justify-content: center;
  align-items: center;
  list-style: none;
  line-height: 28px;

  padding: 0px;
  width: 100%;
  max-width: 800px;
  justify-self: center;
  align-self: center;
  @media (max-width: 992px) {
    height: unset;
  }
`;

const animationRule = css(
  ["", " 1s linear;"] as any as TemplateStringsArray,
  fadeInUp
);

export const SkillsListItem = styled.li<{
  isInViewPort: boolean;
}>`
  opacity: ${(props) => (props.isInViewPort ? 1 : 0)};
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 25%;
  margin: 0px 30px 48px;
  max-width: 70px;
  flex-grow: 1;
  border-radius: 10px;
  padding: 10px;
  color: #fff;

  ${(props) =>
    props.isInViewPort &&
    css`
      animation: 1s ${fadeInUp} linear;
    `}
`;
