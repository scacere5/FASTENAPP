function radicar() {
  alert("¡Solicitud o queja radicada exitosamente!");
}
document.addEventListener('DOMContentLoaded', function () {
  const anonimos = document.querySelectorAll('input[name="anonimo"]');
  const campoCorreo = document.getElementById('campo-correo');
  const inputCorreo = document.getElementById('correo_usuario');

  anonimos.forEach(radio => {
    radio.addEventListener('change', () => {
      if (radio.value === 'No') {
        campoCorreo.style.display = 'block';
        inputCorreo.setAttribute('required', 'true');
      } else {
        campoCorreo.style.display = 'none';
        inputCorreo.removeAttribute('required');
        inputCorreo.value = '';
      }
    });
  });
});
