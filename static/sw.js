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
    "url": "/_nuxt/app.101c4e560de8781b088f.js",
    "revision": "c7caa920c46ce4b48d123cdc869f2ff6"
  },
  {
    "url": "/_nuxt/common.6986c8c0d754b7107a96.js",
    "revision": "328634073f5fa4e5abf51dd22401c2c3"
  },
  {
    "url": "/_nuxt/layouts/default.b151f94163a7c7192459.js",
    "revision": "d82b8c72b53156f798e1a35ac2eca4ef"
  },
  {
    "url": "/_nuxt/layouts/home.21f40fce23e57af19353.js",
    "revision": "514430f291a1695d595d8ba9f7a328ca"
  },
  {
    "url": "/_nuxt/manifest.acd956d2d3575eb4380a.js",
    "revision": "4b772ed7850c2566b2fe70a62ca1a409"
  },
  {
    "url": "/_nuxt/pages/about.7b1ba911167bd0909818.js",
    "revision": "046c6280e5e4e842e213778599e2e1a1"
  },
  {
    "url": "/_nuxt/pages/contact.f851c39c431d0711f814.js",
    "revision": "6c144863c4738c593e1369b72a742f5c"
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
