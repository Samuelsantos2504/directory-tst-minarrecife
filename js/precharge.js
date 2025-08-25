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

//Codigo para reconocer el redireccionamiento 

const keyWord = "paginas";

if (window.location.href.includes(keyWord)) {
  // Si la URL contiene la palabra clave, redirigir a la página de inicio
  window.location.href = "./";
}