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
    "url": "/_nuxt/app.d911a2e9dd9e3943e78c.js",
    "revision": "31233ff77f695aeb9b8e6608d00a2abe"
  },
  {
    "url": "/_nuxt/common.5c4b32427d3c7cf02d57.js",
    "revision": "55dd895c83d21344073207dc6ca3334e"
  },
  {
    "url": "/_nuxt/common.c93405f74547826865fe0e16d0505761.css",
    "revision": "5f6951ac42e915d5318525705866f8fc"
  },
  {
    "url": "/_nuxt/layouts/default.86dd6f3f688c87601079.js",
    "revision": "cbeed3df591089111eb151f672cba44e"
  },
  {
    "url": "/_nuxt/manifest.ccd04b54ac23f40d245d.js",
    "revision": "05d4522073b12592e3fd6f149e5f548f"
  },
  {
    "url": "/_nuxt/pages/About.58050bd68eec63c6b0c5.js",
    "revision": "18bda60bff0205d9acc332f0fb2d250e"
  },
  {
    "url": "/_nuxt/pages/blog/_slug/index.6fad3084599ecd047045.js",
    "revision": "c0ace5337bab4d68c2079eb409105214"
  },
  {
    "url": "/_nuxt/pages/blog/index.ea96e59332b86003b8bb.js",
    "revision": "aa523c7616dbf8f7018f3cf901d9a88e"
  },
  {
    "url": "/_nuxt/pages/Contact.45bc61e016deefc3dd52.js",
    "revision": "53f7273a16567fbfe5356e4ff6dd82c3"
  },
  {
    "url": "/_nuxt/pages/index.1eb75870b5b4ea51da59.js",
    "revision": "4296a382cb145681b36a8fc59310e7f1"
  },
  {
    "url": "/_nuxt/pages/Site.6108659d3dd423b9fc46.js",
    "revision": "07c5b32dab581de713c0813587d40486"
  },
  {
    "url": "/_nuxt/pages/thank-you.6abb31998c1f88fb3527.js",
    "revision": "7bee0f29c87eb930dd6af11e89313bea"
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
