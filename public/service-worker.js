self.addEventListener('install', (event) => {
  console.log('Service Worker 설치됨');
  event.waitUntil(
    caches.open('ebook-cache').then((cache) => {
      return cache.addAll(['/offline.html']);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match('/offline.html'))
  );
});
