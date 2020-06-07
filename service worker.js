self.addEventListener('install', (event) => {
    console.log('Установлен');
});

self.addEventListener('activate', (event) => {
    console.log('Активирован');
});

self.addEventListener('fetch', (event) => {
    console.log('Происходит запрос на сервер');
});



self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/',
        '/img/',
		'/img',
      ]);
    })
  );
});

// self.addEventListener('fetch', function(event) {
  // event.respondWith(caches.match(event.request).then(function(response) {
 
    // if (response !== undefined) {
      // return response;
    // } else {
      // return fetch(event.request).then(function (response) {
 
        // let responseClone = response.clone();

        // caches.open('v1').then(function (cache) {
          // cache.put(event.request, responseClone);
        // });
        // return response;
      // }).catch(function (e) {
        // return caches.match('/');
      // });
    // }
  // }));
// });