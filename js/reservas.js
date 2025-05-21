document.addEventListener('DOMContentLoaded', function () {
  // Crear los calendarios
  const calendarioDeportivo = new FullCalendar.Calendar(document.getElementById('calendario-deportivo'), getConfig('Complejo Deportivo'));
  const calendarioSalon = new FullCalendar.Calendar(document.getElementById('calendario-salon'), getConfig('Salón Social'));
  const calendarioPiscina = new FullCalendar.Calendar(document.getElementById('calendario-piscina'), getConfig('Piscina'));

  calendarioDeportivo.render();
  calendarioSalon.render();
  calendarioPiscina.render();

  const calendarios = {
    'Complejo Deportivo': calendarioDeportivo,
    'Salón Social': calendarioSalon,
    'Piscina': calendarioPiscina,
  };

  // Manejo del formulario
  document.querySelector('.formulario-reserva form').addEventListener('submit', function (e) {
    e.preventDefault();

    const lugar = document.getElementById('lugar').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

    if (!lugar || !fecha || !hora) {
      alert("Completa todos los campos.");
      return;
    }

    const calendario = calendarios[lugar];

    calendario.addEvent({
      title: 'Reservado',
      start: `${fecha}T${hora}`,
      allDay: false
    });

    alert("Reserva agregada.");
    this.reset();
  });

  // Configuración base para cada calendario
  function getConfig(nombreLugar) {
    return {
      initialView: 'dayGridMonth',
      height: 300,
      headerToolbar: {
        left: '',
        center: 'title',
        right: ''
      },
      events: [],
      dateClick: function (info) {
        const confirmDelete = confirm(`¿Eliminar reservas en ${info.dateStr} en ${nombreLugar}?`);
        if (!confirmDelete) return;

        const eventos = this.getEvents().filter(e => e.startStr.startsWith(info.dateStr));
        eventos.forEach(e => e.remove());
      },
      editable: true
    };
  }
});
