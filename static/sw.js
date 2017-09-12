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
    "url": "/_nuxt/app.5e91d9f0dcc013d48a89.js",
    "revision": "3c9e8ebc3488f7b65ed8f647284647ef"
  },
  {
    "url": "/_nuxt/common.6986c8c0d754b7107a96.js",
    "revision": "328634073f5fa4e5abf51dd22401c2c3"
  },
  {
    "url": "/_nuxt/common.886fd562a8f183960da9ea33fc8cc881.css",
    "revision": "1ec41024133851b64f50c8fa3dc2d81d"
  },
  {
    "url": "/_nuxt/layouts/default.e216d0ddb5c93a7f39e8.js",
    "revision": "3773106417f365510ebfc85f1d172c84"
  },
  {
    "url": "/_nuxt/layouts/home.1674527d42b9c77ecca4.js",
    "revision": "b356c2cb5a1d6f09315c9193c2d46fd4"
  },
  {
    "url": "/_nuxt/manifest.f1b4a347fd073a521b2b.js",
    "revision": "ce9fe28e9bcfa5c4e3414bd5a2db9bcc"
  },
  {
    "url": "/_nuxt/pages/About.77d4391885b23459cf4f.js",
    "revision": "acaacad8de7eeb0694176428b6b3ac67"
  },
  {
    "url": "/_nuxt/pages/Contact.7b3e97d0fe4a333f0d46.js",
    "revision": "cda6c823cd91c3bbb4b61c79a7b58708"
  },
  {
    "url": "/_nuxt/pages/index.e5d695345e6ed70a8ff8.js",
    "revision": "cb1392b1e91cd130959e95862b95a2ae"
  },
  {
    "url": "/_nuxt/pages/posts/_slug.690b514fd7d7ec687ef9.js",
    "revision": "a482a349328e2f5c91bd3436fff6d980"
  },
  {
    "url": "/_nuxt/pages/posts/index.e913d32305794ed9ec70.js",
    "revision": "3f5872a9d5a57e651a614ce977af10d8"
  },
  {
    "url": "/_nuxt/pages/resources.4787dc9e468cb5dfff90.js",
    "revision": "a82e2b5fe43c1115c85fa72d9c2282d9"
  },
  {
    "url": "/_nuxt/pages/thank-you.3f7708bcd9294b186584.js",
    "revision": "79b5b3b72b1e3a3f553f80e6b3105daf"
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
