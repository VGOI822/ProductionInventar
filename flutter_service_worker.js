'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "803c5c973cd28eaaae175ffa1b3063a7",
"version.json": "4ec9ae04484b3f9fc9f9503d18d29e72",
"index.html": "6ed846cfe140155813324f46d2432d6d",
"/": "6ed846cfe140155813324f46d2432d6d",
"main.dart.js": "b09e174daf28ebb6356becf949e77b0a",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "dbc7ff165d9551e7a538d72e40373a5b",
".git/config": "bb9f1d8b625e4c5855145d9437ff17aa",
".git/objects/66/866b769b417caf79b04ab972988de23d1aad44": "62f3bae2cb1f090cc15d34dc8c8fb2bd",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/94/a98cf19b68e40c54becd2861c4ed998c8bf2f4": "146eba00b188a7dcf8eed4c4ed132d69",
".git/objects/34/0b5c3927232ffa27bf42168971d273f5f0f560": "fbe29b533c7ebff8258be3c822e8f32d",
".git/objects/5a/2715ff70a6251b7d432fb137748d75a254bbab": "08690fbc4f989bf93815446d9db64e12",
".git/objects/9c/7433a214e775140f6c4a9dcbfb45804792ba8a": "1c8c301ae9b8c2ba12d5b9910aa89070",
".git/objects/02/de4076319d0d687fdfeee7806cd7c163cde1cd": "725fca46b98fdbead51531533df8b585",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/a5/0b37ec7f731455b264ebcd48e7ba1b07328f17": "0bd560dbc9e45b904088535016cd5c0b",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/fb7418838a01db8dd9ae7dc13d3fbac91f48c1": "dffd055635b91b6c76a31f8bdd973149",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fb/82f08510c6b20651ed2015c7f10266a0b9fb85": "ebf2a745e24ba2754e071054c672ce4b",
".git/objects/ed/e95004db943b4dd502d99231a58f522094b387": "51fcb1fdc1e8e80080dd6cbfb81dbaa0",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/16/6cbc5a4162563a275c1f67d782b90c900fe82d": "c28ea61bd8ecddc75e54533570cbeb57",
".git/objects/16/47e78e065899e580528eedc9cb322be1eaf502": "8aa42b862b988f63e27d693ad357d979",
".git/objects/42/6cddb09de3940b30642296e624dc1513efd0f6": "feeaca173866a2d31c2daacf4bd96e42",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9a/3c4c167b2f675f1675c5126869e2687a016b24": "3d7ac08741f16b3c55b708eabae4223f",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/90/488610e3aa0b409622a03d6e20eeda9f53c38d": "e002066b5aab0c374e57bf00cbdaa8e1",
".git/objects/d3/b6831127f9efa34c01b2835d6271ff66002804": "73814efe7a01f0de566eb2bff4c2a022",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/dd/2ceb8386047dd299c75be26daf4068d6e6db44": "cdc409bd1cf25f63601711e78ef7e5bf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ea/18d3736dddf6333d90f3e945277c192812fadb": "79bf268ca293a99637e38132335218c5",
".git/objects/cd/4f2ccfc783a9867500878d757510e32ac51fc7": "3a02333d277b176fb000ab3187b01c64",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/8385794d6fa925e76d6392549a77fba9849407": "c664b4b579d1081cf68d5d7e4f55c56b",
".git/objects/2c/bb543548d6feffb6097d0f7f55689dfdd6c4a9": "6e884054ed0a3541ab5f672bf87a028e",
".git/objects/77/1cabe216b3caaa30ae5b513a908e79bceca860": "d28c023bfdb69c65df969e172dc31dd9",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/00a630eafca1a97630c6025e6655f642ca8b09": "c6b335cae8ec0f9aa123b168395451af",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/82/a2aa9b042d161dae09681c7853a2cb4b33ce69": "63d9e5e5b7e3e5e3eed55d36b38585f8",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/14/e9a23767d515cf0208d0cf09a7cdc1476b32d4": "601d58169d178a73244aedc770f98d67",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "177b9062c416e186530a0eb92333d20a",
".git/logs/refs/heads/main": "177b9062c416e186530a0eb92333d20a",
".git/logs/refs/remotes/origin/main": "a75e9ab1ba4db7807531dd71e8b96e7b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "de0e8951c78b785f74d4d3a12002e3d2",
".git/refs/remotes/origin/main": "de0e8951c78b785f74d4d3a12002e3d2",
".git/index": "eed6c1cf1a8ca58cda99d2590dc14d22",
".git/COMMIT_EDITMSG": "1825c52188729ee3acf7c3220e93b9c9",
"assets/AssetManifest.json": "db187b02290337f2318c4b0aac8429b7",
"assets/NOTICES": "452208c80c4be8a4d65cc00f153719b8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "60fd474238c29dac6f3fdb053bea88c3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "695674684dcc4ba058b860fc896c83c6",
"assets/fonts/MaterialIcons-Regular.otf": "e526f085cbcce3e4c460c0f666f141ae",
"assets/assets/imgs/lr.jpeg": "c3cb8da001ad0641f88dde4dd7650169",
"assets/assets/imgs/hf.jpeg": "3ba094247644273055f4a37db9d4dd36",
"assets/assets/imgs/wp21.1.jpeg": "d443d04557474a52ebc431768c1da06e",
"assets/assets/imgs/T-37.jpeg": "0541c0dea86b838222656fe1cdd7489f",
"assets/assets/imgs/g18.1.jpeg": "e098afb8841d68a9333fc569082eddf5",
"assets/assets/imgs/g22.1.jpeg": "e54dc4d1e76443c656a8292b61d28721",
"assets/assets/imgs/wfg.jpeg": "cdb0a105272816deb8fc2f4522c054bd",
"assets/assets/imgs/lfb.jpeg": "fb49a3be1423522d61b54ddc658836d6",
"assets/assets/imgs/jr.jpeg": "45266cb874d90fc1a3ed0944715ddb3d",
"assets/assets/imgs/inv.jpeg": "172734a64d0d2a43d8f87dcf389a27d6",
"assets/assets/imgs/be.jpeg": "91d36eed010d45089d73faf335efdf93",
"assets/assets/imgs/g20.1.jpeg": "2476e655504671dbc13443eee487557a",
"assets/assets/imgs/wp19.1.jpeg": "e22fe5702c5c244d105bb2450bfcbf97",
"assets/assets/imgs/T-36.jpeg": "e003733f53eae88577d0915584b3186b",
"assets/assets/imgs/nwt.jpeg": "0bb678daf7a5188bd33847c599abc2ce",
"assets/assets/imgs/ia.jpeg": "0721344b494fa10f3f26757a32493fdf",
"assets/assets/imgs/lf.jpeg": "d287eb12616295c599826fabfa9f7e54",
"assets/assets/imgs/lffi.jpeg": "43161da4f7cca8b45d581380d9543182",
"assets/assets/imgs/lvs.jpeg": "47060117e449fe7081e94c0231f7f71c",
"assets/assets/imgs/g19.3.jpeg": "5b703d7a98cb0c2d25217a1411f9ba4e",
"assets/assets/imgs/T-31.jpeg": "f4aa15597fcce2b1d3d08d1ddbc8ba0c",
"assets/assets/imgs/g21.2.jpeg": "5238a39d816e2e4c661c645f1ef3a983",
"assets/assets/imgs/ypq.jpeg": "955d640b16ffaf92b1ebd77dbf83c36a",
"assets/assets/imgs/wp20.3.jpeg": "4b9092b5fe8446d1ed30dffa94c1918c",
"assets/assets/imgs/wp18.2.jpeg": "184b6215e56c9611fe6b62c38f67f6b5",
"assets/assets/imgs/rj.jpeg": "dd3afeb0dff7837cafe8dbc9f2e777ba",
"assets/assets/imgs/hl.jpeg": "50cdd1dbdc01dcc8d3d6179ea29531db",
"assets/assets/imgs/jl.jpeg": "6e587adf2ddac8ce83afec04dad4cb43",
"assets/assets/imgs/la.jpeg": "bf009db0a0f37e7085711cff8cbba2c9",
"assets/assets/imgs/jy.jpeg": "4a66d60649ed231a2719b69c5fbd5a18",
"assets/assets/imgs/bhs.jpeg": "d01f5861a6f4e1579719bd5edc09924e",
"assets/assets/imgs/yp2.jpeg": "c0672dd89d057bf05692f8f8e163bf82",
"assets/assets/imgs/ed.jpeg": "c00843ca59f9b6bfc783fd1e88a8c8cc",
"assets/assets/imgs/rr.jpeg": "4601db254adbc37cf8ce6af20bd32fda",
"assets/assets/imgs/sjjyls.jpeg": "f417a30a9082c69e33766e6e1f93d546",
"assets/assets/imgs/kr.jpeg": "30522708c9af9942f11c126d72693efd",
"assets/assets/imgs/yc.jpeg": "02b54cc62fcd6ada50ecbe2f10f6e3b3",
"assets/assets/imgs/ll.jpeg": "256101f9e0b9ff8bcc6c7e24d8765397",
"assets/assets/imgs/rk.jpeg": "1edd5e99974aed9cb2d1f929aef43fe0",
"assets/assets/imgs/wp18.3.jpeg": "461156d17502908c13e93d333b7531c2",
"assets/assets/imgs/wp20.2.jpeg": "7d1bfa10ea367848010c27cb5b1338f7",
"assets/assets/imgs/T-30.jpeg": "70344b6423bda9c663beb15dc2ae397f",
"assets/assets/imgs/g21.3.jpeg": "1a60c49c0dda0ff53bd80f731386928b",
"assets/assets/imgs/g19.2.jpeg": "5bc007715cc825ddbfcf7c7479750eca",
"assets/assets/imgs/cf.jpeg": "910e7c1e66d21874bc77a879ef276559",
"assets/assets/imgs/wp20.1.jpeg": "0ced94264f87ec44cab889ca806ac1a9",
"assets/assets/imgs/T-33.jpeg": "ff842b08ea46a8d216b7fa23850571ac",
"assets/assets/imgs/g19.1.jpeg": "262d675c15183c55db67cd2ff052c4c8",
"assets/assets/imgs/yp1.jpeg": "6d40f1f65e19b7ad658454d84161d82b",
"assets/assets/imgs/lc.jpeg": "dd3050f574c80bd0aab1acd5f877f98d",
"assets/assets/imgs/fy.jpeg": "72848e9cb141cb330cd1bc1e5b421969",
"assets/assets/imgs/th.jpeg": "fbf1a151660fc6fa8d785feb25849edf",
"assets/assets/imgs/bm.jpeg": "381343fbe195057222f0a515d71f648a",
"assets/assets/imgs/g21.1.jpeg": "cfae1d1c952700bb4924fcae099160c3",
"assets/assets/imgs/T-32.jpeg": "91c8184d5f1db4ed8a546e89a813af2b",
"assets/assets/imgs/od.jpeg": "b50bf249a4eb30d1bd472b9f088451be",
"assets/assets/imgs/bt.jpeg": "d79e787d8b71590cc23b70d1815980cb",
"assets/assets/imgs/wp18.1.jpeg": "1c007a2363027ac60f71464c6c1b366a",
"assets/assets/imgs/gf.jpeg": "3c85c41832b78c0dd9534b64eb481f3c",
"assets/assets/imgs/wp22.1.jpeg": "ec2165e439ddc1f5c269459951015097",
"assets/assets/imgs/lff.jpeg": "9c934a49735413e9b4943563fadaeaa2",
"assets/assets/imgs/fallback.png": "96d0c46dfcff9e99df2a1b00339ee937",
"assets/assets/imgs/cl.jpeg": "5b621a6cc932e5505b47b902a334f198",
"assets/assets/imgs/fg.jpeg": "da8e961140c543115a910650d76c5f8c",
"assets/assets/imgs/g20.2.jpeg": "ce46c4c7417227354aba5131a6df87b8",
"assets/assets/imgs/g18.3.jpeg": "8c1cad31555c7fd33a9ee2359052c22d",
"assets/assets/imgs/wp19.2.jpeg": "c80f0baf9eb8f9c3d03f81464bb8d914",
"assets/assets/imgs/T-35.jpeg": "f1fa43906664182f039866e53c951f41",
"assets/assets/imgs/wp21.3.jpeg": "32c3c49705260e565aa1a6c575d70953",
"assets/assets/imgs/wp21.2.jpeg": "3f84e3a16cf9a745b23702c5ec180e01",
"assets/assets/imgs/T-34.jpeg": "faba5133a34309e753439bae387b764f",
"assets/assets/imgs/wp19.3.jpeg": "a8cb9416f3c91dae7216a5652b6f57fc",
"assets/assets/imgs/g18.2.jpeg": "d696a54d5b393811909f2a7aa8696392",
"assets/assets/imgs/g20.3.jpeg": "543d8d4a72989c623553d23b02483fcf",
"assets/assets/imgs/sp.jpeg": "bf7a3b6827b8b3cd4d3182e47cf17d3a",
"assets/assets/imgs/ld.jpeg": "3405267eaa3728406ff4dd5b7bb3d70d",
"assets/assets/imgs/mb.jpeg": "c45057ffb6fdfe62399c6120322c8ada",
"assets/assets/my_database.db": "990f02076eefa659591172f6707b27e4",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
