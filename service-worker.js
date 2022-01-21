/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "795117f7ee38150e4e23ad621111113f"
  },
  {
    "url": "assets/css/styles.styles.58b7cb9e.css",
    "revision": "3d6ca50fce45cdc2fa6e1b535c3683b0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/swagger-ui-screenshot.3b1dc345.png",
    "revision": "3b1dc3457c56a7244129866dc0e07439"
  },
  {
    "url": "assets/js/0.003c3f10.js",
    "revision": "df297aa343068390f8c09b3e8f936e83"
  },
  {
    "url": "assets/js/1.ec4c58d0.js",
    "revision": "3678163009bc46a214ce0e3d821df0ca"
  },
  {
    "url": "assets/js/10.29a20692.js",
    "revision": "d6f04875a37061164e5a2c6dd615f9e7"
  },
  {
    "url": "assets/js/11.ec3c9032.js",
    "revision": "f21dc641aad5521c72a629ceed75d6fe"
  },
  {
    "url": "assets/js/12.5c83a311.js",
    "revision": "3c51ff492df3876f6cd8025f680e2ebe"
  },
  {
    "url": "assets/js/13.51c5e46b.js",
    "revision": "06e1d0e657ac006c696ba0bac4f81d1e"
  },
  {
    "url": "assets/js/14.fb90f721.js",
    "revision": "445417175279946744bae18f442805e6"
  },
  {
    "url": "assets/js/2.8925da02.js",
    "revision": "15f9024cb24c1f95f68ba29d7400f4e3"
  },
  {
    "url": "assets/js/3.5808b7df.js",
    "revision": "8dca64a517bd335d92789cbf590376f4"
  },
  {
    "url": "assets/js/4.eb2ff7cc.js",
    "revision": "3c8bc4846fd648a7584e5834333b8d7b"
  },
  {
    "url": "assets/js/5.7f36b3a0.js",
    "revision": "c295ea8e4552e7bd37f244a1b3c2d0dd"
  },
  {
    "url": "assets/js/6.5e87fce0.js",
    "revision": "aecb946e83352835ee933c38bc33a002"
  },
  {
    "url": "assets/js/7.fb992213.js",
    "revision": "ed185f53d66f6d0f5f76671382d0c025"
  },
  {
    "url": "assets/js/8.05a67490.js",
    "revision": "dd03b8a4fa781bfa3bfd8c1cac38382c"
  },
  {
    "url": "assets/js/9.5211a8be.js",
    "revision": "6229dbc5c07e16edf5b3ccd4aeceb1bb"
  },
  {
    "url": "assets/js/app.1144f407.js",
    "revision": "bd6ed48b60eb1f0630d04766e921c444"
  },
  {
    "url": "assets/js/styles.58b7cb9e.js",
    "revision": "717c53d70df4c43cc4ac268a421107f1"
  },
  {
    "url": "guide/basics/context.html",
    "revision": "96455d34006c1ee354e05f51a66951f0"
  },
  {
    "url": "guide/basics/controllers.html",
    "revision": "43a73c1f596ff92b3727a6a4cd8f4c48"
  },
  {
    "url": "guide/basics/directory-structure.html",
    "revision": "1a3a182924397e240c586ed76033fa9d"
  },
  {
    "url": "guide/basics/openapi-definitions.html",
    "revision": "6f74c7cf5deaca85614cbf42100315c3"
  },
  {
    "url": "guide/basics/swagger-ui.html",
    "revision": "d993c609ea47714cc2f901db143f2a45"
  },
  {
    "url": "guide/database/mongoose.html",
    "revision": "197a13dbd1f076fd66c263c782ab452a"
  },
  {
    "url": "guide/graphql/controllers.html",
    "revision": "e45a3fc4c3f9b26e3eef1138bdd1b381"
  },
  {
    "url": "guide/graphql/getting-started.html",
    "revision": "691568fdc44e9bc430a32558047557a7"
  },
  {
    "url": "guide/index.html",
    "revision": "b00d6edce000b4f1fea2bc3d0d90830b"
  },
  {
    "url": "images/basics/swagger-ui/swagger-ui-screenshot.png",
    "revision": "3b1dc3457c56a7244129866dc0e07439"
  },
  {
    "url": "images/logo.svg",
    "revision": "b561eb446e155dc9538426c0b3da01cb"
  },
  {
    "url": "index.html",
    "revision": "6558c90a6afaf452011ab94d149cf907"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
