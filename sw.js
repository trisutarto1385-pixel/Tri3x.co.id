const CACHE_NAME = 'tri3x-v7.1-cache';
const urlsToCache = [
  '/',
  '/manifest.json',
  '/assets/img/logo-tri3x-asli.jpeg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});