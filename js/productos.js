const productos = [
    { titulo: "Arena de rio", imagen: "../imagenes/DSC00268.JPG" },
    { titulo: "Material zarandeado", imagen: "../imagenes/DSC00290.JPG" },
    { titulo: "Crudo de rio", imagen: "../imagenes/DSC00273.JPG" },
    { titulo: "Piedra Gavion", imagen: "../imagenes/DSC00284.JPG", descripcion: "8 a 5 Pulgadas" },
    { titulo: "Triturado", imagen: "../imagenes/DSC00276.JPG" },
    { titulo: "Triturado", imagen: "../imagenes/DSC00272.JPG", descripcion: "3/4" },
    { titulo: "Base", imagen: "../imagenes/DSC00270.JPG", descripcion: "1 1/2" },
    { titulo: "Base", imagen: "../imagenes/DSC00286.JPG", descripcion: "1 1/2 Norma invias" },
    { titulo: "Piedra filtro", imagen: "../imagenes/DSC00309.JPG", descripcion: "2 a 5 Pulgadas" }
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
