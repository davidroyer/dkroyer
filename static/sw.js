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
    "url": "/_nuxt/app.ada57f00fbd69fbb978d.js",
    "revision": "1afbf582fdaeef610bfa648c679f647c"
  },
  {
    "url": "/_nuxt/common.5c4b32427d3c7cf02d57.js",
    "revision": "55dd895c83d21344073207dc6ca3334e"
  },
  {
    "url": "/_nuxt/common.9c1d7c6eb338cdedd70efc008fa89fb4.css",
    "revision": "552ac4e5abf953d428e8163d08759ac5"
  },
  {
    "url": "/_nuxt/layouts/default.81c35a03c7f67779f682.js",
    "revision": "95e22bcb84036253e90cf60e40ea626f"
  },
  {
    "url": "/_nuxt/manifest.31656b845ca21ec4c8a8.js",
    "revision": "8fea5dc685d57c2bb1861ff21277d8b2"
  },
  {
    "url": "/_nuxt/pages/About.34958147c0fe9685f70e.js",
    "revision": "08fbc1f0f1c991fdd60f20e13ba9e34b"
  },
  {
    "url": "/_nuxt/pages/blog/_slug.c9509aca324d31cc1951.js",
    "revision": "9fe91e14c548b05a17b46341e339fbf4"
  },
  {
    "url": "/_nuxt/pages/blog/index.3e8c8ac4cefdb6dc705f.js",
    "revision": "78e393e1c909cca78224f73621e96018"
  },
  {
    "url": "/_nuxt/pages/Contact.75479f9725eae433dc86.js",
    "revision": "b142c6fc7be26fdf2382b1c94fd30495"
  },
  {
    "url": "/_nuxt/pages/index.53a296cdb3d0eba74bb9.js",
    "revision": "818a6fbe8abeea9b54e453c7e9a09426"
  },
  {
    "url": "/_nuxt/pages/Site.f2367bc7a5e544a9cd9d.js",
    "revision": "84b89c5729378bc5210b666b1ee8fad5"
  },
  {
    "url": "/_nuxt/pages/thank-you.0e48de823468baa52824.js",
    "revision": "a99eacd4dadbef7a7699165083930c36"
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
