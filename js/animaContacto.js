document.addEventListener("DOMContentLoaded", () => {
    const informaContacto = document.querySelector(".informaContacto");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                informaContacto.classList.add("visible"); // Aplica la clase
            }
        });
    }, {
        threshold: 0.2 
    });

    observer.observe(informaContacto);
});