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
        collectionTypes: ["order", "category", "product", "address"],
        queryLimit: 1000,
      },
    },
  ],
};
