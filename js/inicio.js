document.addEventListener("DOMContentLoaded", () => {
    
    fetch("../paginas/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Error al cargar el header:", error));


    fetch("../paginas/footer.html") 
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

    // Observer para activar los contadores
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

    // Carousel manual
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

    // Swiper.js (automático)
    new Swiper(".mySwiper", {
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 15,
            stretch: 0,
            depth: 300,
            modifier: 1,
        },
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
    });

});