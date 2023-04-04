console.log("at the service worker");
const CACHE_NAME = "my-site-cache-v1";
const urlsToCache = [
  "/static/styles/style.css",
  "/static/images/person.png",
  "/static/images/refresh.png",
  "/static/images/icon.png",
  "/offline"
];

self.addEventListener("install", function (event) {
  // self.skipWaiting();
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsToCache).then(() => self.skipWaiting());
    })
  );
});
console.log("Opened cache");

self.addEventListener("activate", (event) => {
  console.log("Activating service worker");
  event.waitUntil(clients.claim());
});

self.addEventListener("fetch", (event) => {
    console.log(event)
   console.log("Fetch event: ", event.request.url);
  if (isCoreGetRequest(event.request)) {
    console.log("Core get request: ", event.request.url);
    // cache only strategy
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => cache.match(event.request.url)) 
    );
  } else if (isHtmlGetRequest(event.request)) {
    console.log("html get request", event.request.url);
    // generic fallback
    event.respondWith(
      caches
        .open("html-cache")
        .then((cache) => cache.match(event.request.url))
        .then((response) =>
          response ? response : fetchAndCache(event.request, "html-cache")
        )
        .catch((e) => {
          console.log("test", e)
          return caches
            .open(CACHE_NAME)
            .then((cache) => cache.match("/offline"));
        })
    );
  }
});

function fetchAndCache(request, cacheName) {
  return fetch(request).then((response) => {
    if (!response.ok) {
      throw new TypeError("Bad response status");
    }

    const clone = response.clone();
    caches.open(cacheName).then((cache) => cache.put(request, clone));
    return response;
  });
}

function isHtmlGetRequest(request) {
  return (
    request.method === "GET" &&
    request.headers.get("accept") !== null &&
    request.headers.get("accept").indexOf("text/html") > -1
  );
}

function isCoreGetRequest(request) {
  return (
    request.method === "GET" && urlsToCache.includes(getPathName(request.url))
  );
}

function getPathName(requestUrl) {
  const url = new URL(requestUrl);
  return url.pathname;
}
