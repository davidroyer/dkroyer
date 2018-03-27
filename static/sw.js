importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "dkroyer",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.10ef5a23c207d43c9a5b65de0fbdb4c2.css",
    "revision": "10ef5a23c207d43c9a5b65de0fbdb4c2"
  },
  {
    "url": "/_nuxt/app.e4ee52e26cb63900f577.js",
    "revision": "59170132ebbe20e0faf267452918fd37"
  },
  {
    "url": "/_nuxt/layouts/default.dcd86953422baaf0f977.js",
    "revision": "ac29a6620fc264cffb6e27dff66f4b26"
  },
  {
    "url": "/_nuxt/manifest.d4b45a9d2f9c7f0ee40c.js",
    "revision": "667be9a0bc6af143f44759421114d485"
  },
  {
    "url": "/_nuxt/pages/About.4facd00435e2ccb9a89b.js",
    "revision": "5de46776c6a4680cfd12d80189044c97"
  },
  {
    "url": "/_nuxt/pages/blog/_slug/index.809ec7f9e5b783fd1a7a.js",
    "revision": "d0ea8af738e646585be74bfef9690877"
  },
  {
    "url": "/_nuxt/pages/blog/index.4a28e0fa61318bfe8650.js",
    "revision": "fb5c2d7d041a900db6e777f3afd5333b"
  },
  {
    "url": "/_nuxt/pages/Contact.e775de194cb0efa5068a.js",
    "revision": "f8f14d867e0929d77b7355db05c66eaa"
  },
  {
    "url": "/_nuxt/pages/index.e0895036c2f436fe620d.js",
    "revision": "3c40ab8796c5410987161706d1072ccd"
  },
  {
    "url": "/_nuxt/pages/Site.4f59c29de9422ef66965.js",
    "revision": "221e94cc18bf4fa9b527dc303381d5ab"
  },
  {
    "url": "/_nuxt/pages/thank-you.2998c39481c2eb49fbf0.js",
    "revision": "ce696f51d2d087f1655be87eb79366e0"
  },
  {
    "url": "/_nuxt/vendor.70cd4dd77dd90e2d7386.js",
    "revision": "caae04897fc622bc910ddfe403942181"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

