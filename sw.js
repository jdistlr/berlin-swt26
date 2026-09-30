const CACHE="berlin-field-v9";
const ASSETS=[
  "./data/agenda.js",
  "./assets/db.svg",
  "./assets/snowflake-data-cloud-icon.svg",
  "./manifest.webmanifest",
  "./assets/app-icon.svg",
  "./assets/apple-touch-icon.png"
];

self.addEventListener("install",event=>{
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));
});

self.addEventListener("activate",event=>{
  event.waitUntil(Promise.all([
    self.clients.claim(),
    caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key))))
  ]));
});

self.addEventListener("fetch",event=>{
  if(event.request.method!=="GET") return;

  const url=new URL(event.request.url);
  const isNavigation=event.request.mode==="navigate" ||
    (url.origin===self.location.origin && (url.pathname.endsWith("/berlin-swt26/") || url.pathname.endsWith("/berlin-swt26/index.html")));

  if(isNavigation){
    event.respondWith(
      fetch(event.request,{cache:"no-store"})
        .then(response=>response)
        .catch(()=>caches.match("./index.html").then(cached=>cached || caches.match("./")))
    );
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(response=>{
        if(response.ok && url.origin===self.location.origin){
          const copy=response.clone();
          caches.open(CACHE).then(cache=>cache.put(event.request,copy));
        }
        return response;
      })
      .catch(()=>caches.match(event.request))
  );
});
