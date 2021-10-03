module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Gatsby Strapi Playground",
  },
  plugins: [
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://localhost:1337",
        collectionTypes: ["restaurant", "category"],
        queryLimit: 1000,
      },
    },
  ],
};
