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
    "url": "/_nuxt/layouts/default.d8d8fe0ed2a2cff3c9fa.js",
    "revision": "833cafac4ff85ac398bb66c713d843af"
  },
  {
    "url": "/_nuxt/manifest.afd4eac624e11af18802.js",
    "revision": "d77c693916adee87084a41159a994b9d"
  },
  {
    "url": "/_nuxt/pages/About.f427fe208a230af6f00c.js",
    "revision": "ded86d448e57516394e629f9e745124d"
  },
  {
    "url": "/_nuxt/pages/blog/_slug/index.5cab70834c84efc4a2fa.js",
    "revision": "3fe0ee4fee96c7bfb6abfa1ac36e9c35"
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
    "url": "/_nuxt/pages/index.4ced72f5f9679a06298b.js",
    "revision": "6a6cada4eec810fc5fc1e92312269a2d"
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

