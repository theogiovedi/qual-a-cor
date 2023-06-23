const currentCacheName = "qual-a-cor-v3";
const offlineAssets = [
  "./qual-a-cor/ao-vivo.html",
  "./qual-a-cor/fotos.html",
  "./qual-a-cor/images/1024-maskable.png",
  "./qual-a-cor/images/1024.png",
  "./qual-a-cor/images/192.png",
  "./qual-a-cor/images/384.png",
  "./qual-a-cor/images/512.png",
  "./qual-a-cor/images/favicon.png",
  "./qual-a-cor/images/navlogo.svg",
  "./qual-a-cor/index.html",
  "./qual-a-cor/paletas.html",
  "./qual-a-cor/scripts/about.js",
  "./qual-a-cor/scripts/index.js",
  "./qual-a-cor/scripts/lib/calc.js",
  "./qual-a-cor/scripts/lib/canvas.js",
  "./qual-a-cor/scripts/lib/colors.js",
  "./qual-a-cor/scripts/lib/frame.js",
  "./qual-a-cor/scripts/lib/interface.js",
  "./qual-a-cor/scripts/lib/setup.js",
  "./qual-a-cor/scripts/lib/svg.js",
  "./qual-a-cor/scripts/lib/pwa.js",
  "./qual-a-cor/scripts/lib/menu.js",
  "./qual-a-cor/scripts/lib/framerate.js",
  "./qual-a-cor/scripts/live.js",
  "./qual-a-cor/scripts/palettes.js",
  "./qual-a-cor/scripts/photos.js",
  "./qual-a-cor/scripts/videos.js",
  "./qual-a-cor/scripts/hues.js",
  "./qual-a-cor/scripts/ar.js",
  "./qual-a-cor/sobre.html",
  "./qual-a-cor/styles/about.css",
  "./qual-a-cor/styles/general.css",
  "./qual-a-cor/styles/index.css",
  "./qual-a-cor/styles/live.css",
  "./qual-a-cor/styles/nav.css",
  "./qual-a-cor/styles/palettes.css",
  "./qual-a-cor/styles/photos.css",
  "./qual-a-cor/styles/videos.css",
  "./qual-a-cor/styles/select.css",
  "./qual-a-cor/styles/file.css",
  "./qual-a-cor/styles/canvas.css",
  "./qual-a-cor/styles/button.css",
  "./qual-a-cor/styles/lists.css",
  "./qual-a-cor/styles/slider.css",
  "./qual-a-cor/styles/hues.css",
  "./qual-a-cor/styles/ar.css",
  "./qual-a-cor/videos.html",
  "./qual-a-cor/matizes.html",
  "./qual-a-cor/ar.html",
  "https://fonts.googleapis.com/css2?family=Fira+Code&family=Fira+Sans:ital,wght@0,400;0,700;1,400&display=swap",
];

// Add page content to browser cache

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(currentCacheName).then((cache) => {
      cache.addAll(offlineAssets);
    })
  );
});

// Clear old cache whenever SW is installed and there is no other old version of it running

this.addEventListener("activate", (activateEvent) => {
  activateEvent.waitUntil(
    caches.keys().then((cacheNames) => {
      // get all caches in browser
      cacheNames
        .filter((allCacheNames) => allCacheNames.startsWith("qual-a-cor-")) // get all Qual a Cor? caches
        .filter((ourCacheNames) => ourCacheNames !== currentCacheName) // get only the old caches
        .map((oldCacheNames) => caches.delete(oldCacheNames)); // delete all old caches
    })
  );
});

// Redirect all fetch calls to cache files. If it is not in cache, fetch from server

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
