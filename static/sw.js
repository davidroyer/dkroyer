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
    "url": "/_nuxt/app.734b1fedce56a3024f22.js",
    "revision": "cdc28ba3f5c83d38565758e1dda5cca8"
  },
  {
    "url": "/_nuxt/common.6986c8c0d754b7107a96.js",
    "revision": "328634073f5fa4e5abf51dd22401c2c3"
  },
  {
    "url": "/_nuxt/layouts/default.cf082abea11a2ca710b2.js",
    "revision": "69b1e0c891e8ac62b8eebc554f5186a2"
  },
  {
    "url": "/_nuxt/layouts/home.11917d8865a9bcfd2271.js",
    "revision": "bb7750a47afedbb0680dbc14cc2e2cda"
  },
  {
    "url": "/_nuxt/manifest.3bf2f18fc1b72bbb5e18.js",
    "revision": "5837ea470a2c3393afce195aa2071ee1"
  },
  {
    "url": "/_nuxt/pages/About.cefc205db99dfe41036c.js",
    "revision": "728716df04ea769ed83885e3011d9ab0"
  },
  {
    "url": "/_nuxt/pages/Contact.95a454c1fa0675ed3f38.js",
    "revision": "3479ada0739191c91cd492d202c65a5d"
  },
  {
    "url": "/_nuxt/pages/index.6dfadd5edbe3c4f0b760.js",
    "revision": "793c85ca576c7240b65f225a3a963c20"
  },
  {
    "url": "/_nuxt/pages/posts/_slug.d3bcef5569daa47ea764.js",
    "revision": "c9f3fbaa66ebb3e2daf7ee4b384f1894"
  },
  {
    "url": "/_nuxt/pages/posts/index.cda058114d2694619e92.js",
    "revision": "e8e43c09968569a0bb2eedd099d9eb05"
  },
  {
    "url": "/_nuxt/pages/resources.c528018d28b919a2fc3c.js",
    "revision": "8166737b4865cd87787a5963ca36d1ba"
  },
  {
    "url": "/_nuxt/pages/thank-you.9ac8e1f39cb1adb00e37.js",
    "revision": "0106d22bee77356991d77a352abba444"
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
