import * as React from "react";
import { HeadFC, PageProps, graphql } from "gatsby";
import { IndexTemplate } from "../templates/Index/Index";

const IndexPage: React.FC<PageProps<Queries.IndexPageQueryQuery>> = (props) => {
  return <IndexTemplate></IndexTemplate>;
};

export const Head: HeadFC = () => <title>Home Page</title>;

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

export default IndexPage;
