self.addEventListener('install', e => {
    e.waitUnitl(
        caches.open('app-v1').then(cache => {
            console.log('open cache')
            return cache.addAll(['./app.js', './serviceWorker.html'])
        })
    )
})

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(event.request).then(res => {
            if (res) {
                return res
            } else {
                //通过fetch方法向网络发起请求

            }
        })
    )
})