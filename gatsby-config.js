module.exports = {
  siteMetadata: {
    title: `Louis Frankland`,
    author: {
      name: `Louis Frankland`,
      summary: `Louis Frankland is a UI Developer and Designer with experience building websites, applications and components using HTML, CSS and JS.`,
    },
    description: `Louis Frankland's UI Developer Portfolio.`,
    lang: `en-GB`,
    siteUrl: `https://louisfrankland.com/`,
    social: {
      twitter: `louisfrankland`,
    },
  },
  plugins: [
    // Gatsby has built-in Head API — remove react-helmet plugin
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        stripMetadata: true,
        defaultQuality: 100,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Louis Frankland Portfolio`,
        short_name: `Louis Frankland`,
        start_url: `/`,
        background_color: `#9d3493`,
        theme_color: `#9d3493`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/images/profile-round.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        /*
         Enable a service worker. Validation in the plugin disallows certain
         Workbox `options` (e.g. `expiration`) when declared in
         `workboxConfig.runtimeCaching`, so we keep the runtimeCaching
         entries minimal here and append a small `sw` snippet that registers
         the same routes *with* explicit expiration/cacheName settings.

         That appended SW file (`src/sw-append.js`) uses Workbox's runtime
         APIs and runs inside the generated service worker (allowed by the
         plugin's `appendScript` option).
        */
        appendScript: require.resolve(`./src/sw-append.js`),
        workboxConfig: {
          runtimeCaching: [
            // keep shapes that pass plugin validation; detailed cache
            // configuration (names + expirations) is applied in the
            // appended `sw-append.js` file.
            { urlPattern: /\.(?:js|css|json|woff2?|map)$/, handler: `CacheFirst` },
            { urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/, handler: `CacheFirst` },
            { urlPattern: /\/(?:$|[^.]*$)/, handler: `NetworkFirst` },
          ],
        },
      },
    },
  ],
}
