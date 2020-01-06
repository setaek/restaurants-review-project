let restaurantCacheName = "restaurant-static-v1";

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(restaurantCacheName).then(cache => {
      return cache
        .addAll([
          "./",
          "./index.html",
          "./restaurant.html",
          "./css/styles.css",
          "./css/responsiveStyles.css",
          "./data/restaurants.json",
          "./js/dbhelper.js",
          "./js/main.js",
          "./js/restaurant_info.js",
          "./js/sw_register.js",
          "./img/1.jpg",
          "./img/2.jpg",
          "./img/3.jpg",
          "./img/4.jpg",
          "./img/5.jpg",
          "./img/6.jpg",
          "./img/7.jpg",
          "./img/8.jpg",
          "./img/9.jpg",
          "./img/10.jpg"
        ])
        .then(() => console.log("Assets added to cache"))
        .catch(err => console.log("Error while fetching assets", err));
    })
  );
});
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => {
            return (
              cacheName.startsWith("restaurant-") &&
              cacheName != restaurantCacheName
            );
          })
          .map(cacheName => {
            return caches.delete(cacheName);
          })
      );
    })
  );
});
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
