self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("todo-list-cache").then(function(cache) {
      return cache.addAll(["index.html"]);
    })
  );
});
