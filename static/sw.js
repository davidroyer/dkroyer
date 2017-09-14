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
    "url": "/_nuxt/13.68de673fe8723f3d7601.js",
    "revision": "ab062d108b14c83f796b967f3bb8553a"
  },
  {
    "url": "/_nuxt/14.7e9426b0253c6237c446.js",
    "revision": "6cc5425b19a4eca608d13fe7ef4e21f5"
  },
  {
    "url": "/_nuxt/15.4ed199636b8f514faea2.js",
    "revision": "99c52138ac99e19a7042a6c07becbff9"
  },
  {
    "url": "/_nuxt/16.dfb2b5f0b59090a1c702.js",
    "revision": "f4fc901de0374bb2f96e21981316aa81"
  },
  {
    "url": "/_nuxt/app.d2172014a3eed24ec12a.js",
    "revision": "22ec6576ca04fa8833ac23e2b004bd80"
  },
  {
    "url": "/_nuxt/common.13ccb3d366b3921474fc49716ea5005a.css",
    "revision": "189a640e9ad23431afde5db863a6cbcc"
  },
  {
    "url": "/_nuxt/common.3d0e224dec9f08f0df8a.js",
    "revision": "a932cc8f6cf8cc8d1a953aeee4813d24"
  },
  {
    "url": "/_nuxt/layouts/default.a5c5f3d95491bb4b8096.js",
    "revision": "4250d211bc564df3a604cebfdc1c1e46"
  },
  {
    "url": "/_nuxt/layouts/home.4543d0f7c8fee4b45c45.js",
    "revision": "7ca25e9318b4fd4474b2d306c029d679"
  },
  {
    "url": "/_nuxt/manifest.4b44d0f12b63709224a5.js",
    "revision": "ca8d05cfbe3fe4c5e7c687ff9f6fe67d"
  },
  {
    "url": "/_nuxt/pages/About.9bef2135118fffb45ce2.js",
    "revision": "f300eb3b522975a601d400f2ee9aced2"
  },
  {
    "url": "/_nuxt/pages/Contact.c577e6f48361f3f4c864.js",
    "revision": "630309d61d46958310a4d70b3ea4e3d9"
  },
  {
    "url": "/_nuxt/pages/index.52721ddd965c235ec401.js",
    "revision": "10b6054c24387489b0ca8c9cd7cffb7b"
  },
  {
    "url": "/_nuxt/pages/posts/_slug.f918231c21224bae0da5.js",
    "revision": "6b127d67dff4d88bd7274c0f76699318"
  },
  {
    "url": "/_nuxt/pages/posts/index.ad58f0d46c2f6864ba09.js",
    "revision": "2091adfc93cd538c695d60ba91fb8b92"
  },
  {
    "url": "/_nuxt/pages/resources.5207316c3f19511814d8.js",
    "revision": "83db10b22ffe4a5349ad888dbeba86b6"
  },
  {
    "url": "/_nuxt/pages/Site.158b563f6eb8f6533f1b.js",
    "revision": "b8803545deaaec24c6f2691743cb6d2e"
  },
  {
    "url": "/_nuxt/pages/thank-you.a57b37ad6d95e0a58380.js",
    "revision": "ed56ad2c0f824bb387609b4be5c1d7e3"
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
