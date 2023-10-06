import { keyframes } from "styled-components";

export const orbit = keyframes`
  0% {
    transform: rotateZ(0deg);
  }

  100% {
    transform: rotateZ(-360deg);
  }
`;
