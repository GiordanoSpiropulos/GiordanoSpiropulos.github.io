import styled, { keyframes } from "styled-components";

const orbit = keyframes`
  0% {
    transform: rotateZ(0deg);
  }

  100% {
    transform: rotateZ(-360deg);
  }
`;

export const IndexMain = styled.main`
  min-height: 100vh;
  overflow: hidden;
`;

export const DummyDiv = styled.div`
  @media (max-width: 992px) {
    display: none;
  }
`;

export const InfoContainer = styled.div`
  @media (max-width: 992px) {
    width: 100%;
    padding: 0 16px;
  }
`;

export const IndexContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-top: 20%;
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    margin-top: 5%;
  }
`;

export const GreenContainer = styled.div`
  background-color: #64f4ac;
  width: fit-content;
  border-radius: 4px;
  padding: 5px;
`;

export const ImageContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-right: 10%;
  @media (max-width: 992px) {
    display: none;
  }
`;

export const BackgroundCircle = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 100%;
  background-color: #28292d;
`;

export const ImageCircle = styled.div<{
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}>`
  position: absolute;
  background-color: #28242c;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  z-index: 1;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  transform-style: preserve-3d;
`;
export const PresentationContainer = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr;
  height: 100%;
  margin-top: 25px;

  &:last-child {
    color: #86878f;
  }

  @media (max-width: 992px) {
    grid-template-rows: 1fr;
    height: 50%;
  }
`;

export const PresentationInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  & :first-child {
    font-size: 32px;
  }
`;

export const PresentationExperience = styled.div`
  display: flex;
  text-align: center;
  margin-bottom: 80px;
  & span {
    display: flex;
    text-align: center;
    align-items: center;
  }
`;
export const WhiteExperienceBold = styled.b`
  color: #fff;
  margin-right: 15px;
  font-size: 24px;
`;

export const Orbit = styled.div`
  width: 100%;
  height: 80%;
  z-index: 10;
  transform-style: preserve-3d;
  animation: ${orbit} 32s infinite linear;
  overflow: hidden;
`;
