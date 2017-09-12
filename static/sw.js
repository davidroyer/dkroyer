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
    "url": "/_nuxt/app.bd244d05097228c56aa6.js",
    "revision": "016ca1e95d1c285b74f353f0bb8bd631"
  },
  {
    "url": "/_nuxt/common.3d0e224dec9f08f0df8a.js",
    "revision": "a932cc8f6cf8cc8d1a953aeee4813d24"
  },
  {
    "url": "/_nuxt/common.b04bec4e4fd2e1ac42e7e7f2077e522c.css",
    "revision": "b23f1c9b5289a19d3b3683a164074bd9"
  },
  {
    "url": "/_nuxt/layouts/default.0931637603cbbc8e280e.js",
    "revision": "2fbdefcfd5d3062cc0caf871df5c6310"
  },
  {
    "url": "/_nuxt/layouts/home.42dd622d129479a2d8be.js",
    "revision": "162cd9572af69537ac68b14db7422878"
  },
  {
    "url": "/_nuxt/manifest.c05476f22a59deeed17d.js",
    "revision": "c0a14689fb4616b9cdcccbf61601eeb6"
  },
  {
    "url": "/_nuxt/pages/About.77d4391885b23459cf4f.js",
    "revision": "acaacad8de7eeb0694176428b6b3ac67"
  },
  {
    "url": "/_nuxt/pages/Contact.ec80079f0bb8014af366.js",
    "revision": "2b9eaba25ce856ec4dec4e19197088bd"
  },
  {
    "url": "/_nuxt/pages/index.0465b0c49537c5cc2485.js",
    "revision": "fc75c41d49582aefb0b3a81cd141b4dd"
  },
  {
    "url": "/_nuxt/pages/posts/_slug.f7b8d850449cdc262bdd.js",
    "revision": "4196aebf0a2668f8f929273af3e8553d"
  },
  {
    "url": "/_nuxt/pages/posts/index.5609414caba8810fedb9.js",
    "revision": "7844dd62ec5f441bc862ee912cf6c6c5"
  },
  {
    "url": "/_nuxt/pages/resources.5207316c3f19511814d8.js",
    "revision": "83db10b22ffe4a5349ad888dbeba86b6"
  },
  {
    "url": "/_nuxt/pages/Test.a31f08093fe2d2d0afdc.js",
    "revision": "ad9f02db976394629ff7e6ed70be9681"
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
