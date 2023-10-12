import React from "react";

import { Layout, Navbar } from "./src/common/components";
import { ThemeProvider } from "styled-components";
import Theme from "./src/themes/MainTheme";
import { GlobalStyle } from "./src/common/components/Layout/styles";
import { I18nextProvider } from "react-i18next";
import { I18nextContext } from "gatsby-plugin-react-i18next";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/RobotoMono-VariableFont_wght.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="robotoFont"
    />,
  ]);
};

export const wrapPageElement = ({ element, props }) => {
  const Layout =
    element.props.children.props.children.type.Layout ?? React.Fragment;
  return (
    <I18nextProvider i18n={element.props.i18n}>
      <I18nextContext.Provider value={element.props.children.value}>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <Layout {...props}>{element}</Layout>
        </ThemeProvider>
      </I18nextContext.Provider>
    </I18nextProvider>
  );
};
