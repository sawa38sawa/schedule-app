const CACHE_NAME = "schedule-app-cache-v1";
const urlsToCache = [
  "/schedule-app/index.html",
  "/schedule-app/manifest.json",
  "/schedule-app/icon.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
