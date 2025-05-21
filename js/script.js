const imagenes = [
    '../assets/imagenes/1.png',
    './assets/imagenes/2.png',
    './assets/imagenes/3.png',
    'novedades/img4.jpg',
    'novedades/img5.jpg'
  ];
  
  let indiceActual = 0;
  const imgElemento = document.getElementById('imagen-carrusel');
  
  function moverCarrusel(direccion) {
    indiceActual += direccion;
    if (indiceActual < 0) indiceActual = imagenes.length - 1;
    if (indiceActual >= imagenes.length) indiceActual = 0;
    imgElemento.src = imagenes[indiceActual];
  }
  
  function togglePerfil() {
    document.getElementById('panel-perfil').classList.toggle('oculto');
  }
  

function actualizarFecha() {
    const fechaElemento = document.querySelector(".fecha");
    const fechaActual = new Date().toLocaleDateString("es-ES", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });

    fechaElemento.textContent = fechaActual; // Reemplaza @fecha con la fecha real
  }

  actualizarFecha(); // Ejecutar al cargar la página
function toggleMenu() {
  const menu = document.getElementById('menu-principal');
  menu.classList.toggle('oculto-menu');
}
