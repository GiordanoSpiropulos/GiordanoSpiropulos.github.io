import styled, { keyframes } from "styled-components";

interface TypeWriterSpanType {
  fontSize: string;
}

export const TypeWriterSpan = styled.span<TypeWriterSpanType>`
  font-size: ${(props) => props.fontSize};
`;
const blinkTextCursor = keyframes`
  from {border-right-color: #fff;}
  to {border-right-color: transparent}
`;

export const TextCursor = styled.span`
  border-right: 2px solid #fff;
  display: inline;
  animation: ${blinkTextCursor} 0.7s steps(44) infinite normal;
`;
