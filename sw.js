const CACHE_NAME = 'task-manager-v1';
const urlsToCache = [
  '.',
  './favicon/index.html',
  './favicon/styles.css',
  './favicon/app.js',
  './favicon/web-app-manifest-512x512.png',
  './favicon/web-app-manifest-192x192'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});