document.addEventListener("DOMContentLoaded", () => {

    // Ocultamos el slider hasta que el header esté listo
    const sliderBox = document.querySelector(".slider-box");
    if (sliderBox) {
        sliderBox.style.opacity = "0";
        sliderBox.style.transition = "opacity 0.5s ease";
    }

    fetch("./paginas/headerL.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;

            // ✅ Ahora que el header está cargado, mostramos el slider
            if (sliderBox) {
                requestAnimationFrame(() => {
                    sliderBox.style.opacity = "1";
                });
            }
        })
        .catch(error => console.error("Error al cargar el header:", error));

    fetch("./paginas/footerL.html") 
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al cargar el footer");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Error al cargar el footer:", error));    

    // 👇 Tu código de animaciones y observers queda igual
    const animateOnView = (selector, animationClass = "show", threshold = 0.3) => {
        const elements = document.querySelectorAll(selector);
        const observer = new IntersectionObserver((entries, observerInstance) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(animationClass);
                    observerInstance.unobserve(entry.target); 
                }
            });
        }, { threshold });

        elements.forEach(element => observer.observe(element));
    };

    animateOnView(".imagenprincipal, .textoPrincipal", "active", 0.3);
    animateOnView(".demostra", "show", 0.3);
    animateOnView(".formula", "show", 0.3);
    animateOnView(".text-contacto", "show", 0.03);

    let clientes = 0, proyectos = 0, experiencia = 0;

    const incrementarClientesYProyectos = () => {
        if (clientes < 430) {
            clientes++;
            document.getElementById("clientes").textContent = clientes;
        }
        if (proyectos < 250) {
            proyectos++;
            document.getElementById("proyectos").textContent = proyectos;
        }
        if (clientes < 430 || proyectos < 250) {
            setTimeout(incrementarClientesYProyectos, 5);
        }
    };

    const incrementarExperiencia = () => {
        if (experiencia < 7) {
            experiencia++;
            document.getElementById("experiencia").textContent = experiencia + "+";
        }
        if (experiencia < 7) {
            setTimeout(incrementarExperiencia, 100);
        }
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                incrementarClientesYProyectos();
                incrementarExperiencia();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    statsObserver.observe(document.querySelector(".muestra_lider"));

    const carousel = document.getElementById("carousel");
    if (carousel) {
        const images = carousel.querySelectorAll("img");
        const totalImages = images.length;
        const imageWidth = images[0].offsetWidth + 20; 
        let currentIndex = 0;

        const moveCarousel = (direction) => {
            currentIndex += direction;
            if (currentIndex < 0) {
                currentIndex = totalImages - 1;
            } else if (currentIndex >= totalImages) {
                currentIndex = 0;
            }
            const translateX = -currentIndex * imageWidth;
            carousel.style.transform = `translateX(${translateX}px)`;
        };
    }

});
