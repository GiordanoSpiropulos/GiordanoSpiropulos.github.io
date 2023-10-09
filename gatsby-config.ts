import type { GatsbyConfig } from "gatsby";
const path = require("path");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `giordano-portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-root-import`,
    `gatsby-plugin-tsconfig-paths`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        react: { useSuspense: false },
        languages: [`en`, `br`],
        defaultLanguage: `br`,
        pages: [
          {
            matchPath: "/:lang?/",
            getLanguageFromPath: true,
            excludeLanguages: ["br"],
          },
        ],
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
      },
    },
  ],
};

export default config;
