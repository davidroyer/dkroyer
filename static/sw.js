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
    "url": "/_nuxt/app.b5a9bde159a556451b7c.js",
    "revision": "d20f0252004427c3d5767fb093f89d10"
  },
  {
    "url": "/_nuxt/common.3d0e224dec9f08f0df8a.js",
    "revision": "a932cc8f6cf8cc8d1a953aeee4813d24"
  },
  {
    "url": "/_nuxt/common.b9ee2dcdf43b56f506c62117e953c849.css",
    "revision": "dec143a0b72e618abbe7394cb93feab7"
  },
  {
    "url": "/_nuxt/layouts/default.ba2ced6ee982c00d2005.js",
    "revision": "b950f983fc738fb1045058eca8dd69f9"
  },
  {
    "url": "/_nuxt/layouts/home.49913cc177f92a7632bd.js",
    "revision": "6a8e2e3435e9920f2962e09bebbf7f8f"
  },
  {
    "url": "/_nuxt/manifest.539d841b7e663cd4fcf3.js",
    "revision": "954b62cd7be646e8f2932a995c9fdf89"
  },
  {
    "url": "/_nuxt/pages/About.9bef2135118fffb45ce2.js",
    "revision": "f300eb3b522975a601d400f2ee9aced2"
  },
  {
    "url": "/_nuxt/pages/Contact.7f6334a05b87882f298c.js",
    "revision": "aebeac21f10fcb94329f77723b33739b"
  },
  {
    "url": "/_nuxt/pages/index.1d4a420e862e3bbf976d.js",
    "revision": "d5d011f416fd903cf7e367a683a4b5d9"
  },
  {
    "url": "/_nuxt/pages/posts/_slug.f7b8d850449cdc262bdd.js",
    "revision": "4196aebf0a2668f8f929273af3e8553d"
  },
  {
    "url": "/_nuxt/pages/posts/index.e788612091c771e272ff.js",
    "revision": "10aab37e3b17925fb0eb3990d6380ab4"
  },
  {
    "url": "/_nuxt/pages/resources.5207316c3f19511814d8.js",
    "revision": "83db10b22ffe4a5349ad888dbeba86b6"
  },
  {
    "url": "/_nuxt/pages/Site.2f5e41fd265e54f3c99a.js",
    "revision": "b916fef57c3ec2dc7236c52a9dedfb7c"
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
