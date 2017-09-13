importScripts('workbox-sw.prod.v1.3.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/_nuxt/app.dabe6dd9938de9b45772.js",
    "revision": "c5c16f441e194b572cd86dedd29bd5f1"
  },
  {
    "url": "/_nuxt/common.3d0e224dec9f08f0df8a.js",
    "revision": "a932cc8f6cf8cc8d1a953aeee4813d24"
  },
  {
    "url": "/_nuxt/common.b9ee2dcdf43b56f506c62117e953c849.css",
    "revision": "dec143a0b72e618abbe7394cb93feab7"
  },
  {
    "url": "/_nuxt/layouts/default.92f08fb887f8710872d4.js",
    "revision": "6d67c16f7daaec3915332cf0ee367c0d"
  },
  {
    "url": "/_nuxt/layouts/home.47751d925e3335812173.js",
    "revision": "843859c2715fe5ba233cc9f0f1fc7bd0"
  },
  {
    "url": "/_nuxt/manifest.83cad2d3cdd7aba155bd.js",
    "revision": "9630b4aeaac213c0cb4b428063a95687"
  },
  {
    "url": "/_nuxt/pages/About.71678a8b2cda750ff8e0.js",
    "revision": "2587840fadf47c7fb37292b193066626"
  },
  {
    "url": "/_nuxt/pages/Contact.04d5a5e4adb6ade25a2f.js",
    "revision": "f2f4d9f9edf9ad5a8d4f27db41fe674a"
  },
  {
    "url": "/_nuxt/pages/index.d794a8b48c62aa159df2.js",
    "revision": "cf214e848476dcfe2b5595a099981be0"
  },
  {
    "url": "/_nuxt/pages/posts/_slug.f7b8d850449cdc262bdd.js",
    "revision": "4196aebf0a2668f8f929273af3e8553d"
  },
  {
    "url": "/_nuxt/pages/posts/index.2c01e02bc65e77dbbf33.js",
    "revision": "32476d620c9138a8a4e761ab09b75436"
  },
  {
    "url": "/_nuxt/pages/resources.5207316c3f19511814d8.js",
    "revision": "83db10b22ffe4a5349ad888dbeba86b6"
  },
  {
    "url": "/_nuxt/pages/Site.0c6cc7afb8daf74aed02.js",
    "revision": "c024edf1e3697dd5b80218e82f338dad"
  },
  {
    "url": "/_nuxt/pages/thank-you.fba44ea3c5cb2832c994.js",
    "revision": "502bb424ef0189761c7445e8fce608db"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "dkroyer_1.0.0",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/**', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute('/_nuxt/**', workboxSW.strategies.cacheFirst({}), 'GET');
