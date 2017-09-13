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
    "url": "/_nuxt/12.0d80978a6099e615a436.js",
    "revision": "a70191b62b03b3db8a5da819931d7d79"
  },
  {
    "url": "/_nuxt/13.7759b83e5445a42def67.js",
    "revision": "18ff22820fab775b1e40b230901c83d6"
  },
  {
    "url": "/_nuxt/14.f2240965911d3e0d38fb.js",
    "revision": "c1247d616d646bb9ed1cc53b2e37d76d"
  },
  {
    "url": "/_nuxt/15.0d4077f651b4d045844c.js",
    "revision": "65506987b370cb94f2c4e50e0b42190c"
  },
  {
    "url": "/_nuxt/16.fff46c070ebc0c262852.js",
    "revision": "e9f2f61322d3006cbabc870570f39861"
  },
  {
    "url": "/_nuxt/17.debb50a0ccb5e305af5f.js",
    "revision": "5f3912ecb56e2836f8ee7835afcfbfeb"
  },
  {
    "url": "/_nuxt/app.1ddef9533b4ac13fa486.js",
    "revision": "ab2bb1df887e01a0720b982ca3fa7bc5"
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
    "url": "/_nuxt/layouts/default.d30be2d8c07ef536dafe.js",
    "revision": "359b7dda4f28a9db3588b3c0677ad69e"
  },
  {
    "url": "/_nuxt/layouts/home.0f61d99d99e47ee30038.js",
    "revision": "669fb780a2ca7484bb9d8a87c67131a7"
  },
  {
    "url": "/_nuxt/manifest.50a7756100020d34ec54.js",
    "revision": "f03ecf7a00567125d43e2ade1909c0cb"
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
    "url": "/_nuxt/pages/index.f0aa39eb66cafef4ae0d.js",
    "revision": "fab4209485708d8c1287ec03f369d3f1"
  },
  {
    "url": "/_nuxt/pages/posts/_slug.54c613f3d50e779fc647.js",
    "revision": "8970a8f468b4f1f850e15470310e24f0"
  },
  {
    "url": "/_nuxt/pages/posts/index.ad58f0d46c2f6864ba09.js",
    "revision": "2091adfc93cd538c695d60ba91fb8b92"
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
