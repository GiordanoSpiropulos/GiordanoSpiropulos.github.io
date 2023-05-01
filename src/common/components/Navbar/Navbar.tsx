import React, { useState, useEffect } from "react";
import * as S from "./styles";
import { useTranslation } from "gatsby-plugin-react-i18next";

interface NavbarModel {
  name: string;
  url: string;
}

export function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);

  const { t } = useTranslation();
  const links: NavbarModel[] = t("links", { returnObjects: true });

  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 50 ? setScrolled(true) : setScrolled(false);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <S.Navbar isScrolled={scrolled}>
      <S.NavList>
        {links.map((link) => (
          <li key={link.name}>
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </S.NavList>
    </S.Navbar>
  );
}
