import styled from "styled-components";

export const AboutMeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;

  background-color: #25262a;
  padding: 10% 16px 0px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

export const WhatIDoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 992px) {
    order: 2;
  }
`;

export const WhatIDoCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #2b2c30;
  height: 150px;
  width: 70%;
  margin-bottom: 10px;
  border-radius: 8px;
  padding: 25px 50px;
  &:nth-child(1n) {
    color: #fff;
  }

  &:hover {
    background-color: #2d2e32;
    :nth-child(1n) {
      color: #64f4ac !important;
    }
  }
  @media (max-width: 992px) {
    width: 80%;
  }
`;

export const WhatIDoTitle = styled.span`
  font-size: 28px;
`;

export const WhatIDoExtra = styled.span`
  color: #86878f;
`;

export const WhoIAmContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 992px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 5%;
    margin-bottom: 25px;
  }
`;

export const WhoIAmTitle = styled.span`
  color: #fff;
  font-size: 32px;
`;

export const WhoIAmSubtitle = styled.span`
  color: #fff;
  font-size: 24px;
  margin-top: 50px;
  font-style: italic;
  margin-bottom: 25px;
`;

export const WhoIAmAbout = styled.span`
  color: #86878f;
  line-height: 30px;
`;
