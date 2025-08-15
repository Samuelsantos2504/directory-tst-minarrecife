const informacionEmpresa = document.querySelector(".informacionEmpresa");
    if (informacionEmpresa) {
        const empresaObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    informacionEmpresa.classList.add("visible");
                    empresaObserver.unobserve(informacionEmpresa);
                }
            });
        }, { threshold: 0.4 });

        empresaObserver.observe(informacionEmpresa);
    }