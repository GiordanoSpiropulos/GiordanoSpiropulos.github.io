import { keyframes } from "styled-components";

export const fadeInUp = keyframes`
0%{
    opacity: 0;
    -webkit-transform: translate3d(0,100%,0);
    transform: translate3d(0,100%,0);
}
100%{
    opacity: 1;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
}

`;
