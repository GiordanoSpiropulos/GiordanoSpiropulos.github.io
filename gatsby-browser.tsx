import React from "react";
import { GatsbyBrowser } from "gatsby";
import { GlobalStyle } from "./globalStyle";
import { Layout } from "./src/common/components";

// Adds a class name to the body element

// Wraps every page in a component

// export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
//   element,
//   props,
// }) => {
//   return (
//     <Layout {...props}>
//       <GlobalStyle />
//       {element}
//     </Layout>
//   );
// };

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  const newElement = React.cloneElement(
    element, // I18nextProvider
    element.props,
    React.cloneElement(
      element.props.children, // I18nextContext.Provider
      element.props.children.props,
      React.createElement(
        Layout,
        undefined,
        element.props.children.props.children
      )
    )
  );

  return newElement;
};
