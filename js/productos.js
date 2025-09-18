const productos = [
    { titulo: "Arena de rio", imagen: "../imagenes/DSC00268.webp" },
    { titulo: "Material zarandeado", imagen: "../imagenes/DSC00290.webp" },
    { titulo: "Crudo de rio", imagen: "../imagenes/DSC00273.webp" },
    { titulo: "Piedra Gavion", imagen: "../imagenes/DSC00284.webp", descripcion: "8 a 5 Pulgadas" },
    { titulo: "Triturado", imagen: "../imagenes/DSC00276.webp" },
    { titulo: "Triturado", imagen: "../imagenes/DSC00272.webp", descripcion: "3/4" },
    { titulo: "Base", imagen: "../imagenes/DSC00270.webp", descripcion: "1 1/2" },
    { titulo: "Base", imagen: "../imagenes/DSC00286.webp", descripcion: "1 1/2 Norma invias" },
    { titulo: "Piedra filtro", imagen: "../imagenes/DSC00309.webp", descripcion: "2 a 5 Pulgadas" },
    { titulo: "Excavadora", imagen: "../imagenes/IMG_3455.webp" },
    { titulo: "Camión de carga", imagen: "../imagenes/IMG_3469.webp"},
    { titulo: "volqueta", imagen: "../imagenes/IMG_3472.webp" },
    { titulo: "Cargador frontal", imagen: "../imagenes/IMG_3484.webp" },
    { titulo: "Retroexcavadora", imagen: "../imagenes/IMG_3693.webp" },
    { titulo: "Camión volquete", imagen: "../imagenes/IMG_3731.webp"}
];

const container = document.getElementById('productos-container');
let fila = null;

productos.forEach((producto, index) => {
    if (index % 3 === 0) {
        fila = document.createElement('div');
        fila.className = 'mostrarProductos-container';
        container.appendChild(fila);
    }


    const card = document.createElement('div');
    card.className = 'card border-secondary mb-3';
    card.style.maxWidth = '18rem';

    const header = document.createElement('div');
    header.className = 'card-header';
    const img = document.createElement('img');
    img.src = producto.imagen;
    img.alt = producto.titulo;
    img.className = 'card-img';
    img.loading = 'eager';
    header.appendChild(img);

    const body = document.createElement('div');
    body.className = 'card-body text-primary';
    const title = document.createElement('h5');
    title.className = 'card-title';
    title.textContent = producto.titulo;
    body.appendChild(title);

    if (producto.descripcion) {
        const desc = document.createElement('p');
        desc.textContent = producto.descripcion;
        body.appendChild(desc);
    }

    card.appendChild(header);
    card.appendChild(body);
    fila.appendChild(card);
});
