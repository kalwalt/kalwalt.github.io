// service-worker.js

// set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'my-blog',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

self.addEventListener('install', event => {
  const urls = [
    'https://cdn.ampproject.org/v0.js',
    'https://cdn.ampproject.org/v0/amp-install-serviceworker-0.1.js',
    'https://cdn.ampproject.org/shadow-v0.js',
    'index.html',
    '/'
  ];
  const cacheName = workbox.core.cacheNames.runtime;
  event.waitUntil(caches.open(cacheName).then(cache => cache.addAll(urls)));
});

// use `networkFirst` strategy for `*.html`, like all my posts
workbox.routing.registerRoute(/\.html$/, args => {
  return workbox.strategies.networkFirst().handle(args).then(response => {
    if (!response) {
      return caches.match('offline.html');
    }
    return response;
  });
});

// use `cacheFirst` strategy for images
workbox.routing.registerRoute(
    /\.(?:js|css|png|gif|jpg|svg|json)$/,
    workbox.strategies.cacheFirst()
);

// third party files
workbox.routing.registerRoute(
    /^https?:\/\/cdn.staticfile.org/,
    workbox.strategies.staleWhileRevalidate()
);

workbox.routing.registerRoute(/(.*)cdn\.ampproject\.org(.*)/,
  workbox.strategies.staleWhileRevalidate()
);
