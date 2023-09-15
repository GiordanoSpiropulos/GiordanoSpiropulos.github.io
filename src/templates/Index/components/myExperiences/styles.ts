import styled from "styled-components";
export const MyExperiencesContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #25262a;
  .vertical-timeline-element-date {
    color: #fff;
  }
  .vertical-timeline {
    max-width: unset;
  }
`;

export const MyExperiencesTitle = styled.h2`
  color: #fff;
  font-size: 28px;
  align-self: center;
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const VerticalTimelineTitle = styled.h3`
  color: #fff;
`;

export const VerticalTimelineSubtitle = styled.h5`
  color: #64f4ac;
`;

export const VerticalTimelineDescription = styled.p`
  color: #86878f;
  line-height: 30px;
`;
