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
    "url": "/_nuxt/app.ab5ee064b6c9fe8aab45.js",
    "revision": "dd7f197f8bb741b1fc9f914bf32792af"
  },
  {
    "url": "/_nuxt/common.1dc5f6faf79be2ec2e470d3e1631689a.css",
    "revision": "ee0bafb337337820107645f88277bf44"
  },
  {
    "url": "/_nuxt/common.5c4b32427d3c7cf02d57.js",
    "revision": "55dd895c83d21344073207dc6ca3334e"
  },
  {
    "url": "/_nuxt/layouts/default.81c35a03c7f67779f682.js",
    "revision": "95e22bcb84036253e90cf60e40ea626f"
  },
  {
    "url": "/_nuxt/manifest.ddaf10ad7f95677b7893.js",
    "revision": "62e7e87940525186684cd1db6ee2fab4"
  },
  {
    "url": "/_nuxt/pages/About.34958147c0fe9685f70e.js",
    "revision": "08fbc1f0f1c991fdd60f20e13ba9e34b"
  },
  {
    "url": "/_nuxt/pages/blog/_slug.95f75cd49c6f3223006f.js",
    "revision": "ec8b4814e528576ccfaac18e33eb952e"
  },
  {
    "url": "/_nuxt/pages/blog/index.ab322d387f304d3afad0.js",
    "revision": "153bdf4c0a454b5b41d5359cde394321"
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
