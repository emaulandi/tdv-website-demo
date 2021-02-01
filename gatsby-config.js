module.exports = {
  siteMetadata: {
    title: "Gatsby Starter - Forty V2",
    author: "Hunter Chang",
    description: "A Gatsby.js V2 Starter based on Forty by HTML5 UP"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-notion-contents`,
      options: {
        token: '853a115cf033e287347a5e4b8b88a10593b7b0aa0df38440b003c86198749039b392a76f7e8d7d13bab7ead31e46e686dd80987bdf0e8a61179ce9b8ac4feb1b627e443750acd805e59bec3a970b',
        ids: ['90d8ddc118c0483985ed71db26ac389c', '279eb1c04abd4cadbc447be7430bd3c4'],
        prefix: '/',
        removeStyle: true,
      },
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
          spreadsheetId: '1X3_cDXwcqsqWq67Z-sFX1jnN2B3XfctAag1qI4dWYlQ',
          worksheetTitle: 'events',
          credentials: require('./private/drive_api.json')
      }
  },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
