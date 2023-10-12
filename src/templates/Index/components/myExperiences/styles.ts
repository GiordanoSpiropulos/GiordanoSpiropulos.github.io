import styled from "styled-components";
export const MyExperiencesContainer = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${(props) => props.theme.color.contrastBackground};
  padding-bottom: 20px;
  .vertical-timeline-element-date {
    color: ${(props) => props.theme.color.primary.white};
  }
  .vertical-timeline {
    max-width: unset;
  }
`;

export const MyExperiencesTitle = styled.h2`
  color: ${(props) => props.theme.color.primary.white};
  font-size: 28px;
  margin-top: 80px;

  align-self: center;
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.color.primary.white};
`;

export const VerticalTimelineTitle = styled.h3`
  color: ${(props) => props.theme.color.primary.white};
`;

export const VerticalTimelineSubtitle = styled.h5`
  color: ${(props) => props.theme.color.primary.main};
`;

export const VerticalTimelineDescription = styled.p`
  color: #86878f;
  line-height: 30px;
`;
