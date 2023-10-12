import styled from "styled-components";

export const DropdownContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 200px;
`;

export const DropdownMenu = styled.div`
  background-color: ${(props) => props.theme.color.mainBackground};
  padding: 12px 16px;
  position: absolute;
  z-index: 1;
`;
