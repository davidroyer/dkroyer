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
    "url": "/_nuxt/app.30e4c34b387f5d3f497c.js",
    "revision": "b89217199da9c4555c18466710eca56e"
  },
  {
    "url": "/_nuxt/common.3d0e224dec9f08f0df8a.js",
    "revision": "a932cc8f6cf8cc8d1a953aeee4813d24"
  },
  {
    "url": "/_nuxt/common.fca658a83630fed0fc5aadaa62e2e26e.css",
    "revision": "82269426009e2933971b452c7f5b8b4e"
  },
  {
    "url": "/_nuxt/layouts/default.77368e8b5a13c764ab18.js",
    "revision": "5093db8d8f61cbd5a0630f67ad83a10f"
  },
  {
    "url": "/_nuxt/layouts/home.964836e997a3bce606f5.js",
    "revision": "3cf4e4fb01b1cb3a03310bd946e99b44"
  },
  {
    "url": "/_nuxt/manifest.9642473770db081d7ff3.js",
    "revision": "62797f9f4daf2b8352a5515cc043db38"
  },
  {
    "url": "/_nuxt/pages/About.786681888a2f33de788f.js",
    "revision": "c4275e5711870715c5de0e1bbbee1812"
  },
  {
    "url": "/_nuxt/pages/Contact.cc04deeffcbaf591bf5e.js",
    "revision": "fdc0245d2a2fcaf030bda72140f0377e"
  },
  {
    "url": "/_nuxt/pages/index.524ccf4d2e4ad63b74e3.js",
    "revision": "8536b2f40bdac9375d4a41d6f713c9e6"
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
    "url": "/_nuxt/pages/Site.f9090650ce3299cd48e1.js",
    "revision": "3030a180dc4b9ec79aa4198c382e0d2d"
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
