import styled, { css } from "styled-components";

interface Navbar {
  isScrolled: boolean;
}

export const GreenSeparator = styled.hr`
  border: 1px solid ${(props) => props.theme.color.primary.main};
  width: 100%;
`;
export const Navbar = styled.nav<Navbar>`
  display: grid;
  ${(props) =>
    props.isScrolled &&
    css`
      position: sticky;
      top: 0px;
      background-color: ${(props) => props.theme.color.contrastBackground};
    `}
  z-index: 999;
  height: 80px;
  grid-template-columns: 1fr 2fr 1fr;
  width: 100%;
  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const NavHamburguerMenu = styled.div`
  display: none;
  @media (max-width: 992px) {
    display: flex;
    align-items: center;
    margin-left: 16px;

    & button {
      background-color: transparent;
      border: none;

      &:hover + & {
        display: inline-block;
      }
    }
  }
`;

export const NavInfo = styled.div`
  display: flex;
  margin-left: 16px;
  justify-content: center;
  @media (max-width: 992px) {
    display: none;
  }
`;

export const NavBrand = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const NavBrandName = styled.a`
  color: ${(props) => props.theme.color.primary.white};
  text-decoration: none;
`;

export const NavListMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0px;
  padding: 0px;

  a {
    color: ${(props) => props.theme.color.primary.white};
    &:hover {
      color: ${(props) => props.theme.color.primary.main};
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
    width: 100%;
  }
`;

export const NavListMenuInner = styled.div`
  width: 100%;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0px;
  padding: 0px;

  a {
    color: ${(props) => props.theme.color.primary.white};
    &:hover {
      color: ${(props) => props.theme.color.primary.main};
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
  @media (max-width: 992px) {
    display: none;
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  gap: 10px;
  @media (max-width: 992px) {
    justify-content: flex-end;
  }
`;

export const SocialInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocialInfoText = styled.span`
  color: ${(props) => props.theme.color.primary.white};
  margin-left: 10px;
  @media (max-width: 992px) {
    display: none;
  }
`;
