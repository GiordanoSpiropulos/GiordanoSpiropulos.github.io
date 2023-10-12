import * as React from "react";
import { HeadFC, PageProps, graphql } from "gatsby";
import { IndexTemplate } from "../templates/Index/Index";
import { Layout } from "@components/index";

const IndexPage = () => {
  return <IndexTemplate></IndexTemplate>;
};

export const Head: HeadFC = () => <title>Giordano Portfolio</title>;

export const query = graphql`
  query IndexPageQuery($language: String!) {
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
IndexPage.Layout = Layout;
export default IndexPage;
