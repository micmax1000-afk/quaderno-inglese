const CACHE='quaderno-inglese-v15-7-mobile';
const CORE=['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./data/oxford3000.js'];
self.addEventListener('install',event=>event.waitUntil((async()=>{
  const cache=await caches.open(CACHE);
  for(const url of CORE){
    try{const r=await fetch(url,{cache:'no-store'});if(r.ok)await cache.put(url,r)}catch(_){}
  }
  await self.skipWaiting();
})()));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('message',event=>{if(event.data?.type==='SKIP_WAITING')self.skipWaiting()});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);
  if(url.pathname.endsWith('/version.json')){
    event.respondWith(fetch(event.request,{cache:'no-store'}));
    return;
  }
  if(event.request.mode==='navigate' || url.pathname.endsWith('/index.html')){
    event.respondWith(fetch(event.request,{cache:'no-store'}).then(r=>{
      if(r.ok){const copy=r.clone();caches.open(CACHE).then(c=>c.put('./index.html',copy)).catch(()=>{});}return r;
    }).catch(()=>caches.match('./index.html')));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(r=>{
    if(r.ok){const copy=r.clone();caches.open(CACHE).then(c=>c.put(event.request,copy)).catch(()=>{});}return r;
  }).catch(()=>caches.match('./index.html'))));
});
