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
    "url": "/_nuxt/app.90d31e20e3e66c45db85.js",
    "revision": "d3202fc6409769b8ffc500b3948bca97"
  },
  {
    "url": "/_nuxt/common.3d0e224dec9f08f0df8a.js",
    "revision": "a932cc8f6cf8cc8d1a953aeee4813d24"
  },
  {
    "url": "/_nuxt/common.dcf2c250aa41a9e7b3328343a7da4bd2.css",
    "revision": "873df17ce391510a3a854c14b0387a20"
  },
  {
    "url": "/_nuxt/layouts/default.f76acfa631c5f22e7b41.js",
    "revision": "ca2d8634cee4a92fcf4fcc2feae95d94"
  },
  {
    "url": "/_nuxt/layouts/home.91a515ebf4de37325f3d.js",
    "revision": "d68582d46d2f1a45037f52ed12d85b50"
  },
  {
    "url": "/_nuxt/manifest.85b84b0bf586f646ccb1.js",
    "revision": "4e4556f0fbfcba4243fc828346d66b51"
  },
  {
    "url": "/_nuxt/pages/About.b6927ebe59660bec1d28.js",
    "revision": "63d573552098c1b0bdfefa7f09822646"
  },
  {
    "url": "/_nuxt/pages/Contact.17e5434c81d9d9097b7f.js",
    "revision": "9f16fb337f8667fe5a23c4e5d04263e4"
  },
  {
    "url": "/_nuxt/pages/index.32898f61e8437145e7f3.js",
    "revision": "63f3f2d4eb22d82f03d1659fdf43abd1"
  },
  {
    "url": "/_nuxt/pages/posts/_slug.f918231c21224bae0da5.js",
    "revision": "6b127d67dff4d88bd7274c0f76699318"
  },
  {
    "url": "/_nuxt/pages/posts/index.a1a626d688e0c4b94129.js",
    "revision": "a3a4ad9998278ed966320be9a1f36416"
  },
  {
    "url": "/_nuxt/pages/resources.5207316c3f19511814d8.js",
    "revision": "83db10b22ffe4a5349ad888dbeba86b6"
  },
  {
    "url": "/_nuxt/pages/Site.4ce9e67262b541a2c516.js",
    "revision": "533e25555b6f0fb77fae54fad6874258"
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
