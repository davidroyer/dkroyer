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
    "url": "/_nuxt/app.a0a623373fe98f143bbc.js",
    "revision": "6ea09a4d435ddccc8b0fce91e9c8d81b"
  },
  {
    "url": "/_nuxt/common.7efcfc26ad6fada45839.js",
    "revision": "b1bd5be96b3b7c7d523c0dcd627f2b20"
  },
  {
    "url": "/_nuxt/common.b9ee2dcdf43b56f506c62117e953c849.css",
    "revision": "dec143a0b72e618abbe7394cb93feab7"
  },
  {
    "url": "/_nuxt/layouts/default.50fa36237c8d67a0eaee.js",
    "revision": "4a9d4d06d94ddaa298d3fa8d8bace32c"
  },
  {
    "url": "/_nuxt/layouts/home.cf842f9200347d564390.js",
    "revision": "46cd37d5acf3a40b133108363808c594"
  },
  {
    "url": "/_nuxt/manifest.d5e4ee5a40ae25b877c9.js",
    "revision": "ef230668189411e7d054e65a347dbcfb"
  },
  {
    "url": "/_nuxt/pages/About.dd52a7fd4f8f57eb382d.js",
    "revision": "03f1d3323e680c652b7a7e24402f7cf5"
  },
  {
    "url": "/_nuxt/pages/Contact.c6579569fdf0fa0fad21.js",
    "revision": "d0749b731a99070da622840bb684aef3"
  },
  {
    "url": "/_nuxt/pages/index.1d4a420e862e3bbf976d.js",
    "revision": "d5d011f416fd903cf7e367a683a4b5d9"
  },
  {
    "url": "/_nuxt/pages/posts/_slug.f7b8d850449cdc262bdd.js",
    "revision": "4196aebf0a2668f8f929273af3e8553d"
  },
  {
    "url": "/_nuxt/pages/posts/index.e788612091c771e272ff.js",
    "revision": "10aab37e3b17925fb0eb3990d6380ab4"
  },
  {
    "url": "/_nuxt/pages/resources.6fb472e37dbb8a46f7ae.js",
    "revision": "1706bc1feda0aa5dcaa847eabc5fd47c"
  },
  {
    "url": "/_nuxt/pages/Site.158b563f6eb8f6533f1b.js",
    "revision": "b8803545deaaec24c6f2691743cb6d2e"
  },
  {
    "url": "/_nuxt/pages/thank-you.6abb31998c1f88fb3527.js",
    "revision": "7bee0f29c87eb930dd6af11e89313bea"
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
