import * as React from "react";
import { HeadFC, PageProps, graphql } from "gatsby";
import { IndexTemplate } from "../templates/Index/Index";
import { useTranslation } from "gatsby-plugin-react-i18next";

const IndexPage: React.FC<PageProps> = () => {
  return <IndexTemplate></IndexTemplate>;
};

export const Head: HeadFC = () => <title>Home Page</title>;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export default IndexPage;
