importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "dkroyer",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.a751ab058e4333cae5b6b3416224485d.css",
    "revision": "a751ab058e4333cae5b6b3416224485d"
  },
  {
    "url": "/_nuxt/app.f7142b1a73f786298b02.js",
    "revision": "5cc0a6a53a6dde0b713a040d7275bbdc"
  },
  {
    "url": "/_nuxt/layouts/default.4fdbd6e8015d3365f460.js",
    "revision": "096bcdd9ff42e05534f967aec082f5c3"
  },
  {
    "url": "/_nuxt/manifest.edbcbe3b2ce2984e4a57.js",
    "revision": "105561b5b48f41f86e9d93b0c5d97cf0"
  },
  {
    "url": "/_nuxt/pages/blog/_slug.e18e93000d81b088024c.js",
    "revision": "40d4d2ac4a6d9a452a8a672d458d8151"
  },
  {
    "url": "/_nuxt/pages/blog/index.b76adfb79f6afaa659aa.js",
    "revision": "1f9c4b9e76f1cdcf98a3082b291e33b5"
  },
  {
    "url": "/_nuxt/pages/Contact.c1fb5afed8158adbc7d6.js",
    "revision": "1a86801934747e98c5a16e0f35b2c684"
  },
  {
    "url": "/_nuxt/pages/index.f2edfd746d8857723ac1.js",
    "revision": "0a169f38c3b3b48fc36fe33eb64df40b"
  },
  {
    "url": "/_nuxt/pages/Site.2df3956ba83abfd9a561.js",
    "revision": "c3a84a11b2b4dbedd206de956726a61f"
  },
  {
    "url": "/_nuxt/pages/thank-you.327eb683083b9892e183.js",
    "revision": "2ee8dfbb5d9d4815ba69a04235c2a86b"
  },
  {
    "url": "/_nuxt/vendor.2335655d849bb1bdc096.js",
    "revision": "1fe347052a4f60ed0973ec583d1876c3"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

