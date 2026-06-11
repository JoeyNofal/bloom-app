if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/bloom-app/sw.js').then(reg => {
    reg.update();
  });
}