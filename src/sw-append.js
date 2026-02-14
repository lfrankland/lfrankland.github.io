// This file is appended to the generated service worker by `gatsby-plugin-offline`.
// It runs inside the SW where the `workbox` global is available.

/* global workbox */

// Fingerprinted JS/CSS/static files --> cache for 1 year
workbox.routing.registerRoute(
  /\.(?:js|css|json|woff2?|map)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'static-resources',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
      }),
    ],
  })
);

// Images --> cache for 1 year
workbox.routing.registerRoute(
  /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 100,
        maxAgeSeconds: 60 * 60 * 24 * 365,
      }),
    ],
  })
);

// HTML pages (navigation) --> network first, short cache
workbox.routing.registerRoute(
  /\/(?:$|[^.]*$)/,
  new workbox.strategies.NetworkFirst({
    cacheName: 'html-pages',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24, // 1 day
      }),
    ],
  })
);
