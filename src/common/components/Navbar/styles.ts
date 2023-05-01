import styled from "styled-components";

interface Navbar {
  isScrolled: boolean;
}
export const Navbar = styled.nav<Navbar>`
  display: grid;
  height: 80px;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  width: 100%;
  background-color: ${(props) =>
    props.isScrolled ? "transparent" : "#262626"};
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  grid-column-start: 6;

  a {
    color: #fff;
  }
  li {
    margin: 0 20px;
  }
`;
