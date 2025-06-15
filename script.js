const contenedor = document.getElementById("productos");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((productos) => {
    productos.forEach((producto) => {
      contenedor.innerHTML += `
        <div class="col-md-4 mb-4">
          <div class="card h-100 shadow">
            <img src="${producto.image}" class="card-img-top p-3" alt="${producto.title}" style="height: 300px; object-fit: contain;">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${producto.title}</h5>
              <p class="card-text">${producto.description.substring(0, 100)}...</p>
              <p class="fw-bold">$${producto.price}</p>
              <a href="#" class="btn btn-primary mt-auto">Comprar</a>
            </div>
          </div>
        </div>`;
    });
  })
  .catch((err) => console.error("Error al cargar productos:", err));