import React from "react";
import { GatsbyBrowser, GatsbySSR } from "gatsby";
import { Layout, Navbar } from "./src/common/components";
//import { I18nextProvider } from "react-i18next";
import { I18nextContext, I18nextProvider } from "gatsby-plugin-react-i18next";
import { GlobalStyle } from "./src/common/components/Layout/styles";
import { ThemeProvider } from "styled-components";
import Theme from "./src/themes/MainTheme";

// Wraps every page in a component

export const wrapPageElement = ({ element, props }) => {
  //console.log(element.props.children.props.children.type.Layout);
  const Layout =
    element.props.children.props.children.type.Layout ?? React.Fragment;
  return (
    <I18nextProvider i18n={element.props.i18n}>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Layout {...props}>{element}</Layout>
      </ThemeProvider>
    </I18nextProvider>
  );
};

// export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
//   element,
// }) => {
//   const newElement = React.cloneElement(
//     element, // I18nextProvider
//     element.props,
//     React.cloneElement(
//       element.props.children, // I18nextContext.Provider
//       element.props.children.props,
//       React.createElement(
//         Layout,
//         undefined,
//         element.props.children.props.children
//       )
//     )
//   );

//   return newElement;
// };
