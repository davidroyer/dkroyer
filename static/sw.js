importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "dkroyer",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.3659795443c4f13e7d19.js",
    "revision": "a6205bc5af684a7e49026e1bbddc60b8"
  },
  {
    "url": "/_nuxt/app.821d2b7faeecc0ea59162709bb1ca851.css",
    "revision": "821d2b7faeecc0ea59162709bb1ca851"
  },
  {
    "url": "/_nuxt/layouts/default.46c724869216492940d8.js",
    "revision": "1c01df55030f135ce921b234d6779c96"
  },
  {
    "url": "/_nuxt/manifest.c34d1510a4e13b5fafe5.js",
    "revision": "550be7f82642c06480948f3a35dfb1d1"
  },
  {
    "url": "/_nuxt/pages/About.7abfe71bfea7397ebf1a.js",
    "revision": "60c61e609370a6026eafd6a3e345fded"
  },
  {
    "url": "/_nuxt/pages/blog/_slug.3bb756fb9db3139c4be7.js",
    "revision": "5d14e5e2d3a10073ffd8ec6ba9831a94"
  },
  {
    "url": "/_nuxt/pages/blog/index.15e6d17927dfee90a299.js",
    "revision": "084f07a2d22dd3e5001a1198c560aa79"
  },
  {
    "url": "/_nuxt/pages/Contact.e775de194cb0efa5068a.js",
    "revision": "f8f14d867e0929d77b7355db05c66eaa"
  },
  {
    "url": "/_nuxt/pages/index.0b5a97bcb33214dcd524.js",
    "revision": "abc1ce29536b370f8568149bf0550332"
  },
  {
    "url": "/_nuxt/pages/Site.2df3956ba83abfd9a561.js",
    "revision": "c3a84a11b2b4dbedd206de956726a61f"
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

