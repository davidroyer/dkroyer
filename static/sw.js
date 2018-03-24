importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "dkroyer",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.c1bdda214ecc9869bd8717b3c14e5d38.css",
    "revision": "c1bdda214ecc9869bd8717b3c14e5d38"
  },
  {
    "url": "/_nuxt/app.edd7b4f0c1bdfd378c0a.js",
    "revision": "f8039d0b1624a74d6e1d47038e76dcf2"
  },
  {
    "url": "/_nuxt/layouts/default.91a824a0ab2436bf78ff.js",
    "revision": "4d4a3f78d3fdb3442ea939b6205959ee"
  },
  {
    "url": "/_nuxt/manifest.22e22dd7ccc99f45b0ad.js",
    "revision": "ded56805869325add1ff6154fd11c26e"
  },
  {
    "url": "/_nuxt/pages/About.f427fe208a230af6f00c.js",
    "revision": "ded86d448e57516394e629f9e745124d"
  },
  {
    "url": "/_nuxt/pages/blog/_slug/index.3926d632256bd44ff8ca.js",
    "revision": "dc430aceb60283dad06c5d2afcd5e993"
  },
  {
    "url": "/_nuxt/pages/blog/index.5acd5d9c4159c95b4f9d.js",
    "revision": "ec9741ac9bc839e27b6180f3befddf69"
  },
  {
    "url": "/_nuxt/pages/Contact.c1fb5afed8158adbc7d6.js",
    "revision": "1a86801934747e98c5a16e0f35b2c684"
  },
  {
    "url": "/_nuxt/pages/index.6958f81dd7ad67dd87c8.js",
    "revision": "05de83ffd9b7e4012fefdbfdf8db0057"
  },
  {
    "url": "/_nuxt/pages/Site.70ced4e31f1685a52738.js",
    "revision": "c9ec678a03729e368588a89a0ece6e3e"
  },
  {
    "url": "/_nuxt/pages/thank-you.2998c39481c2eb49fbf0.js",
    "revision": "ce696f51d2d087f1655be87eb79366e0"
  },
  {
    "url": "/_nuxt/vendor.fb181da8651a2cebe118.js",
    "revision": "286cf1c5453b463a95cb70b3c6e770a0"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

