if (navigator.serviceWorker) {
    navigator.serviceWorker.register('./serviceWorker.js', {scope: './'})
        .then (res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
} else {
    alert('Service Worker is not supported')
}