// Inline service worker for environments where external SW files aren't accessible
export function registerInlineServiceWorker() {
  if (!('serviceWorker' in navigator)) {
    console.log('Service Workers not supported');
    return;
  }

  // Create service worker code as a blob
  const swCode = `
    const CACHE_NAME = 'mero-jyotish-v1';
    const urlsToCache = [
      '/',
    ];

    // Install event
    self.addEventListener('install', (event) => {
      event.waitUntil(
        caches.open(CACHE_NAME)
          .then((cache) => cache.addAll(urlsToCache))
      );
      self.skipWaiting();
    });

    // Activate event
    self.addEventListener('activate', (event) => {
      event.waitUntil(
        caches.keys().then((cacheNames) => {
          return Promise.all(
            cacheNames.map((cacheName) => {
              if (cacheName !== CACHE_NAME) {
                return caches.delete(cacheName);
              }
            })
          );
        })
      );
      self.clients.claim();
    });

    // Fetch event - network first, fallback to cache
    self.addEventListener('fetch', (event) => {
      event.respondWith(
        fetch(event.request)
          .then((response) => {
            // Clone the response
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
            return response;
          })
          .catch(() => {
            return caches.match(event.request)
              .then((response) => response || caches.match('/'));
          })
      );
    });
  `;

  try {
    const blob = new Blob([swCode], { type: 'application/javascript' });
    const swUrl = URL.createObjectURL(blob);

    navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
        console.log('Inline Service Worker registered');
        
        // Check for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                console.log('New version available');
              }
            });
          }
        });
      })
      .catch(() => {
        console.log('Service Worker registration skipped in this environment');
      });
  } catch (error) {
    console.log('Service Worker not available');
  }
}
