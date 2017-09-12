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
    "url": "/_nuxt/app.460e8574758f5b65c853.js",
    "revision": "b6fbfe918c01d238d72af1e08ed2dd3e"
  },
  {
    "url": "/_nuxt/common.c1ef5cabf2432f5502ef5efd3dba707b.css",
    "revision": "a8a71f53b69286582642680fb00cc67d"
  },
  {
    "url": "/_nuxt/common.f573902470dc6804de8e.js",
    "revision": "df9ebe9121c555f0c21b66d7980d3d84"
  },
  {
    "url": "/_nuxt/layouts/default.fd831a9a9cb17be56f08.js",
    "revision": "934abfe826ef8d15ccdf6944a49d1866"
  },
  {
    "url": "/_nuxt/layouts/home.64aff586b936ba6623ea.js",
    "revision": "b7ee17f9ea21fd9d17d3bbca989a8c9b"
  },
  {
    "url": "/_nuxt/manifest.7d4c49a026ab80b7c9a4.js",
    "revision": "ca720eba202c2640577c5afd3fc31573"
  },
  {
    "url": "/_nuxt/pages/About.77d4391885b23459cf4f.js",
    "revision": "acaacad8de7eeb0694176428b6b3ac67"
  },
  {
    "url": "/_nuxt/pages/Contact.e184e4873aab6eff7a74.js",
    "revision": "a5765da1b80b273abae8ea17eeceaac2"
  },
  {
    "url": "/_nuxt/pages/index.8164cfeb1a5616d2754e.js",
    "revision": "01da7a2238adf2e61b7a3c1b9debcbe2"
  },
  {
    "url": "/_nuxt/pages/posts/_slug.6eb03bee5024cd4616af.js",
    "revision": "14e75ab14aad61a90e41c75478405725"
  },
  {
    "url": "/_nuxt/pages/posts/index.5609414caba8810fedb9.js",
    "revision": "7844dd62ec5f441bc862ee912cf6c6c5"
  },
  {
    "url": "/_nuxt/pages/resources.6fb472e37dbb8a46f7ae.js",
    "revision": "1706bc1feda0aa5dcaa847eabc5fd47c"
  },
  {
    "url": "/_nuxt/pages/thank-you.65c3cbb32442e7753e7d.js",
    "revision": "589001978eae1ec509bbc49f8068217e"
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
