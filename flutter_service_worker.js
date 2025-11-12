'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "375ae8a7db88c5cd461062829dc90efd",
".git/config": "fff5306d1ac208c2fc40bb8e0923ab48",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "01e034f12680e116e4e7b66d01eb33a4",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-checkout": "ef678df1e004da305e21cdeead47876f",
".git/hooks/post-commit": "4d58bc5ca88e7330533771a694429974",
".git/hooks/post-merge": "675fe1c500a971841ba2e5abc1aeb579",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push": "a9399d70a31d576f0435e776cae4934e",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f38f09d9b4ba4a0ce4b50a3fbed29f02",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/info/refs": "af1a247f00d08f61af17bd6e8ab8ff55",
".git/lfs/cache/locks/refs/heads/main/verifiable": "91188ef767ae3a3a42e92f1706f161d0",
".git/lfs/objects/20/e2/20e2f59919d514cc194444ec3b38adafcc898ba38e3283a4e525ecfbd2514117": "07b9f5853202304d3b0749d9306573cc",
".git/lfs/objects/4c/9e/4c9edc9a9bd8817c12ac650bd24a3e5a21fb1b857758728e9819f62c5c013a22": "8034ad26ba2485dab2fd49bdd786837b",
".git/lfs/objects/5e/1f/5e1f801de136a593d29c555b3c8dea235e761e59a1b370a1a4dba684cb80278a": "24c77e750a7fa6d474198905249ff506",
".git/lfs/objects/ea/b8/eab8f0df5027670550425a66f06bf537d99032a50b2a2fb176e3f82ef50cce3c": "264db41426307cfc7fa44b95a7772109",
".git/logs/HEAD": "b0b8328eb75c9a51ab34e447e7c23419",
".git/logs/refs/heads/main": "c6f6d735f8b6ab701c3381cf6ac5e054",
".git/logs/refs/remotes/origin/HEAD": "c9bdaa449bab133a95d52639793d9102",
".git/logs/refs/remotes/origin/main": "0bc8c768ea353e1de8cae9a6da12c754",
".git/objects/07/07dce3a59f41ca3970be48dd052f35058b18f4": "05bc1285a3eb97752e8918ed1b1f450b",
".git/objects/09/b96ae858c5c33022a35f4cfdd3c3ff2f4de6dd": "922bddf5110a080d1ce5ef1714f5447f",
".git/objects/25/7ba08bc5c61be6b635c8dfdbbbf7c5951b9003": "068db68344c812b6ebeaeea14ce1021f",
".git/objects/25/998e0c495675ea1697cbeb3bf252c3b051251a": "3123e3d9ac12ab23474a837af82fc6db",
".git/objects/28/aef175b3f07d99160ff7b29bbdc7341c1d4236": "aabd1d54a9a5ecdad44ba4079bd6736d",
".git/objects/39/d1cc6f23e8b4e1cd386c81c3aaa350999bebc3": "b46437800538c57362a3c2b0c353549f",
".git/objects/42/398b1d36a57e0c5e208a66e5a5dd99b1b64e6d": "673d60eb3752bd2196f187935f35f554",
".git/objects/4e/68b6e96a6c2fbf72c1164c23a2b9ea977e93db": "2f95a819ce70d1f989e5d89b27c77f7b",
".git/objects/52/5d8ce8ef25a14dd73ee1f4d65047de05ccfdfa": "180ef34af59508c089501f24556bfeb9",
".git/objects/62/4cc4c982e5d67e533c9d24db8532f0cf488988": "4b57a5f53b72d8b6ed85c0a8f8c599dc",
".git/objects/62/dd00fa5701d254f9be734d6356f59fd10a40f3": "ca7856f8d2dd064e917b0ad0e0a725fd",
".git/objects/63/0afdd67e39a9f86a032c38f9b42efae811c18d": "bd8e03983f3de060e9ec670a23a81f18",
".git/objects/6a/792c46f10299ac46c3fe0e502c390894c4d8f9": "de90d03d90620107178b0f40032895a2",
".git/objects/6e/40347c43a998ee302955bfd403ddb0a44a834e": "ab6cb648c45419120557110bf2fdc339",
".git/objects/70/85ba5f0492bd4714a3f5bc5ff40f301088bd36": "f4e467439c8c46e0b053bc09f66399dc",
".git/objects/77/ff05016ca8d41fcc6fa8c9f78009a73dd200a5": "749fc4e941e484006bfc18474d2d779c",
".git/objects/82/852fdcb3fbf6a90d3dd6bf163b5ce2bc2fc76c": "b4d7da2df4984d3e08c07942c285e8fa",
".git/objects/8f/cfd5cbdf746f0170e5c31903c33d0e1cadbd8a": "5bec18df16bda9f2cbe56582dca720fc",
".git/objects/93/f142df94749bd145b144faf54911ac98a8fbcf": "204348f1ca7273c108644e7ceff484ae",
".git/objects/95/36ad84b8d6bfadb6a2e56494060dd3d9683780": "1cc01e469ec51648d846b16d7f509169",
".git/objects/95/a7331e343c1d5201565d095e4d3fd6fe49a46a": "8f99ce8499482c6ffb88909a7209663a",
".git/objects/9e/f7de2716222ed732581e5e510a0cadc19bc752": "33f905e94ecc580f98d6b2a14433f71a",
".git/objects/9f/4914cb028ee607d763b795ba40673870242170": "413f1b55fe029d44f03d3de7650a9c8a",
".git/objects/a2/505309a4007c3bc91d983a93a192968585f46d": "cab7e419259dee57d74f8d933e31b65d",
".git/objects/a4/8402025c7d548aef0b4d7ab5c27e32c0255275": "4e03972d42e70d98ad1c758c1613c7c8",
".git/objects/a5/93fb76ef20304334b5fc9b49c7d9ce75d048fc": "e2a6e8690bf0c3bc539ae88044d7255a",
".git/objects/a9/336a01b77e35de28439b4df732e27a16c90ce8": "636b9d0e69ab7c2060b94399965cecfa",
".git/objects/b1/8a154b18f81b9910d3a89ef5ac5f427b965f54": "dffef3b1ea7751dfc27d23d6621bd9dc",
".git/objects/b1/c0fe43525ecf94e1e49bc9a1af3aeabe465b90": "53b1c422d30e587e7019495d4c5985b0",
".git/objects/b3/0cd42bdf78b61077d5f8caeceea7421c3cf303": "2a6d1ebcd43f696c10febc3f0bfb791b",
".git/objects/b7/b2202de06ee58b381b6adf68f25d1c1a4c1d1c": "67847f1da0d2e4a04dfe2e91329b4362",
".git/objects/bc/b770aab526cf622407eb55b3249b88f8c07350": "fe6ae84c92766e4c76f4fe57cd06356c",
".git/objects/bc/c4a68ca99f7bc21fd6f5d7c0348bf9ba3e2141": "2f15ef2cccbd99f039c93267e9be5101",
".git/objects/be/d4514347779422123ebd50646b29df596b96fc": "5fa6127b1b9a4964286216ae88590915",
".git/objects/be/fa28ae29420b04ee2eb5e5fcdab5579ac18421": "9d12ca91be69f0c314fb1a84495c6d14",
".git/objects/bf/b8b77066909462f682efacc6ca27e7b539b50c": "febf9e80941c3a42c6371f32109b033e",
".git/objects/bf/cb0ffc255b66c5410a208ac74019757184c956": "6ac1f4f9c7f3259f87581242a0ad2f7b",
".git/objects/c0/f210270d4e415d3ced46163c6f42ff197dfaaa": "a637a5ed223ef2c7e7e25bd6febbc602",
".git/objects/ca/4e8f48326474e98a62ac62424ca69037e2b00a": "a07ff577b872a5a07ce2abf07d68e0b7",
".git/objects/cd/d0a541ae7ba415c677b184c3ec33ef3da51817": "84ed6aab20c52bd8c08969ec3f797c26",
".git/objects/d6/98b734e2df73cb84466c4392f2ec3bd3127b80": "5fbc916497265786024728c90c22d299",
".git/objects/da/64cd563b2792678ab2e6a90b4c88197101de91": "eb4a6fa2b0aba9366d6dfe7ba5e6b76a",
".git/objects/dd/e00866b45c938a0891533b76f48c84ee326ad2": "382fde4248507b62ed1bc98011dc2e08",
".git/objects/e0/665061a6ba1dd95d5a2e7534a2c040e2ecda2f": "9313c962ef39d7f85bcd83f273e90760",
".git/objects/e0/ea734cf6727bde1a05e6720a628107eb2e2046": "ba9f68ebb210a61681b198783c623aef",
".git/objects/e8/ee290a0e45004a5d5f993e742a5adf3d1dbf84": "791ea5656cd595c9dda4814e0a7aa049",
".git/objects/ea/a824228c6c50b26eb863b187892b00387224d5": "63a34c1184ada6e4826df7d838bb4844",
".git/objects/f0/967daffacf08f59792f0ba9fdb06adba2685f3": "f2a8cf655c74bda4eb2b50b2819e22a9",
".git/objects/f3/33db403e5c579ba116c3ae3f0a38ba262c57fe": "8d3ac24451b3fa6358984b2304cb499a",
".git/objects/info/packs": "b83764bf6a58d8a39b8b5defb53b9679",
".git/objects/pack/pack-231638a2ac318a95107a041c3ed2ec4972009f0b.idx": "42b9d94c30bfb7787a79672fc270ff06",
".git/objects/pack/pack-231638a2ac318a95107a041c3ed2ec4972009f0b.pack": "30d77054c930f59e1bcd32c153f974dd",
".git/objects/pack/pack-231638a2ac318a95107a041c3ed2ec4972009f0b.rev": "ef3deffc1fec645c421144e88eba72ea",
".git/ORIG_HEAD": "afba02c7f34b8b5213c27b8649a30dcf",
".git/refs/heads/main": "e0c49f6dbade10c4928b999ec16e461b",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "e0c49f6dbade10c4928b999ec16e461b",
".vercel/project.json": "60110c77faee4cb39d4c5a8d1d1f11a1",
".vercel/README.txt": "2b13c79d37d6ed82a3255b83b6815034",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "7bad0dbab758c92e314f3abb447a8d36",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "00211bc0cc8b2ffe0564027eddace4ed",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d5b0810cda39b98f646450788b0cdcfb",
"/": "d5b0810cda39b98f646450788b0cdcfb",
"main.dart.js": "d34334f7761aa2fda755594419f22a98",
"manifest.json": "f1ce5b65d8b9f9f06b6381ee259b4356",
"version.json": "dbccb1300827524e25cd8198368a8719"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
