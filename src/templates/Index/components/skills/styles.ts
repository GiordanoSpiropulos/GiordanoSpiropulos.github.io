import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 16px;
  min-height: 100vh;
  background-color: #2b2f32;
`;

export const SkillsTitle = styled.h2`
  color: #fff;
  font-size: 28px;
  align-self: center;
`;

export const SkillsInnerContainer = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

export const SkillsInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SkillsSubTitle = styled.h3`
  color: #fff;
  align-self: center;
`;

export const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  height: 200px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  list-style: none;
  line-height: 28px;
  margin: 0px;
  padding: 0px;

  @media (max-width: 992px) {
    height: unset;
  }
`;

export const SkillsListItem = styled.li`
  background-color: #25262a;
  text-align: center;
  width: 20%;
  flex-grow: 1;
  border-radius: 10px;
  padding: 10px;
  color: #fff;
`;
