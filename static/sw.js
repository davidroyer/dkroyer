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
    "url": "/_nuxt/app.90161351f9b94aa78a48.js",
    "revision": "729b5c1acb107bce07f089dd756bc734"
  },
  {
    "url": "/_nuxt/common.5c4b32427d3c7cf02d57.js",
    "revision": "55dd895c83d21344073207dc6ca3334e"
  },
  {
    "url": "/_nuxt/common.f278214f1bd1ef08c752d46bd5892b0d.css",
    "revision": "3fd5bab579b32e15c9669cf2a52660eb"
  },
  {
    "url": "/_nuxt/layouts/default.846304a83deab315afff.js",
    "revision": "79d80759b514753be1666ec5609f3bc0"
  },
  {
    "url": "/_nuxt/manifest.29aafc0468ad8bd98528.js",
    "revision": "424e42a0280212bb2d33c24c14009647"
  },
  {
    "url": "/_nuxt/pages/About.34958147c0fe9685f70e.js",
    "revision": "08fbc1f0f1c991fdd60f20e13ba9e34b"
  },
  {
    "url": "/_nuxt/pages/blog/_slug.6de5dd319ccb803c0592.js",
    "revision": "07d04067abc80db75897d68003e5cb51"
  },
  {
    "url": "/_nuxt/pages/blog/index.22add9c4f21efd7c21f2.js",
    "revision": "0fd4daacf886fedb72b44a8b7abc0f70"
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
    "url": "/_nuxt/pages/Site.cfc4b78360f6580488f0.js",
    "revision": "30e17cd7abed363d63b7d517451fdc1e"
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
