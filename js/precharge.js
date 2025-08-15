document.addEventListener("DOMContentLoaded", () => {
      const imgs = document.querySelectorAll(".card img");
      imgs.forEach(img => {
        const preloadLink = document.createElement("link");
        preloadLink.rel = "preload";
        preloadLink.as = "image";
        preloadLink.href = img.src;
        document.head.appendChild(preloadLink);

        // También las precacheamos en memoria
        const precache = new Image();
        precache.src = img.src;
      });
});