const CACHE_NAME = 'evolt-apex-admin-v2';
const urlsToCache = [
  '/admin/login',
  '/admin/dashboard',
  '/manifest-admin.json',
  '/icons/admin/icon-192x192.svg',
  '/icons/admin/icon-512x512.svg'
];

// Install: cache core shell
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

// Fetch: network-first for JS/CSS/HTML, cache-first for static assets
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.mode === 'navigate' || url.pathname.endsWith('.js') || url.pathname.endsWith('.css')) {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response.ok) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(request, responseClone));
          }
          return response;
        })
        .catch(() => caches.match(request).then(r => r || new Response('Offline', { status: 503 })))
    );
    return;
  }

  event.respondWith(
    caches.match(request)
      .then(response => {
        if (response) return response;
        return fetch(request).then(resp => {
          if (resp.ok) {
            const respClone = resp.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(request, respClone));
          }
          return resp;
        });
      })
  );
});

// Activate: clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME).map(name => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});
