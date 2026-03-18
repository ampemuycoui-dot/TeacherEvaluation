self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("teacher-eval-cache").then(function(cache) {
      return cache.addAll(["index.html"]);
    })
  );
});
