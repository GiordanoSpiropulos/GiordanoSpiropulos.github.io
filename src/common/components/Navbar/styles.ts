import styled from "styled-components";

interface Navbar {
  isScrolled: boolean;
}
export const Navbar = styled.nav<Navbar>`
  display: grid;
  z-index: 5;
  height: 80px;
  grid-template-columns: 1fr 2fr 1fr;
  width: 100%;
  background-color: ${(props) =>
    props.isScrolled ? "transparent" : "#2b2f32"};
`;

export const NavBrand = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;

export const NavBrandName = styled.span`
  color: #fff;
`;
export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0px;
  padding: 0px;

  a {
    color: #fff;
    &:hover {
      color: #64f4ac;
      ::before {
        margin-right: 5px;
        content: "<";
      }
      ::after {
        margin-left: 5px;
        content: "/>";
      }
    }
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 20px;
    width: 100%;
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const SocialInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocialInfoText = styled.span`
  color: #fff;
  margin-left: 10px;
`;
