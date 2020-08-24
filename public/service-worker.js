const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/manifest.webmanifest",
  "/styles.css",
  "/index.js",
  "../transaction.js",
  "/routes/api.js",
  //   "/assets/js/service-worker.js",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
  //../models/transaction.js
];
const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";
// // to install and register your service worker
// self.addEventListener("install", function (evt) {
//   evt.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       console.log("Your files were pre-cached successfully!");
//       return cache.addAll(FILES_TO_CACHE);
//     })
//   );
//   self.skipWaiting();
// });
// // remove old data from the cache and will update
// self.addEventListener("activate", function (evt) {
//   evt.waitUntil(
//     caches.keys().then((keyList) => {
//       return Promise.all(
//         keyList.map((key) => {
//           //sets up new cache if names don't match
//           if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
//             console.log("Removing old cache data", key);
//             return caches.delete(key);
//           }
//         })
//       );
//     })
//   );
//   self.clients.claim();
// });
// // Enable the service worker to intercept network requests
// self.addEventListener("fetch", function (evt) {
//   if (evt.request.url.includes("/api/")) {
//     //Serve static files from the cache. Proceed with a network request when the resource is not in the cache. This code allows the page to be accessible offline. (This code should be placed in the function handling the `fetch` event.)
//     evt.respondWith(
//       caches.open(CACHE_NAME).then((cache) => {
//         return cache.match(evt.request).then((response) => {
//           return response || fetch(evt.request);
//         });
//       })
//     );
//   }
// });
