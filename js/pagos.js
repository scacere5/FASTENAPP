function pagarFactura(boton) {
  const fila = boton.closest(".fila-pago");
  alert("Factura pagada exitosamente.");
  fila.remove();
}

function agregarDeuda() {
  const contenedor = document.getElementById("contenedor-deudas");
  const nuevaDeuda = document.createElement("div");
  nuevaDeuda.className = "fila-pago";
  nuevaDeuda.innerHTML = `
    <div class="columna-izquierda">
      <span class="etiqueta amarillo">Factura Nueva</span>
      <span class="etiqueta amarillo">Referencia: Multa</span>
      <div class="valor-caja">
        <p>Valor a pagar:</p>
        <strong>$50.000,00</strong>
      </div>
      <p class="fecha-texto">Fecha de pago oportuno:<br><strong>MAYO 26/25</strong></p>
      <button class="btn-pago" onclick="pagarFactura(this)">Paga tu factura</button>
    </div>
  `;
  contenedor.appendChild(nuevaDeuda);
}

function descargarFactura() {
  window.open("factura_pago_samuel.pdf", "_blank");
}
