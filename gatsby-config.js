module.exports = {
  siteMetadata: {
    title: "Hello Jun!",
  },
  plugins: [
	  {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: 'src/utils/typography',
      }
    },
    `gatsby-plugin-emotion`,
  ],
};
