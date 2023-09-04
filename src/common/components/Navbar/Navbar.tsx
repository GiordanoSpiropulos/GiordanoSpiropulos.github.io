import React, { useState, useEffect } from "react";
import * as S from "./styles";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { StaticImage } from "gatsby-plugin-image";
import { NavbarLink, NavbarSocial } from "./navbar-types";

export function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);

  const { t } = useTranslation();

  const links: NavbarLink[] = t("links", { returnObjects: true });
  const socials: NavbarSocial[] = t("socials", { returnObjects: true });

  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 50 ? setScrolled(true) : setScrolled(false);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <S.Navbar isScrolled={scrolled}>
      <S.NavBrand>
        <S.NavBrandName>
          <b>Giordano</b> Spiropulos
        </S.NavBrandName>
      </S.NavBrand>
      <S.NavList>
        {links.map((link) => (
          <li key={link.name}>
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </S.NavList>
      <S.SocialMediaContainer>
        <a href={socials[0].url} target="_blank" rel="noopener noreferrer">
          <S.SocialInfo>
            <StaticImage
              src="../../../images/icons/linkedin.svg"
              alt={socials[0].alt}
              width={16}
              height={16}
            />
            <S.SocialInfoText>{socials[0].name}</S.SocialInfoText>
          </S.SocialInfo>
        </a>
        <a href={socials[1].url} target="_blank" rel="noopener noreferrer">
          <S.SocialInfo>
            <StaticImage
              src="../../../images/icons/github.svg"
              alt={socials[1].alt}
              width={16}
              height={16}
            />
            <S.SocialInfoText>{socials[1].name}</S.SocialInfoText>
          </S.SocialInfo>
        </a>
        <a href={socials[2].url} target="_blank" rel="noopener noreferrer">
          <S.SocialInfo>
            <StaticImage
              src="../../../images/icons/email.svg"
              alt={socials[2].alt}
              width={16}
              height={16}
            />
          </S.SocialInfo>
        </a>
      </S.SocialMediaContainer>
    </S.Navbar>
  );
}
