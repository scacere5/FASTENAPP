document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendario-visitas');
  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    height: 500,
    events: [],
    dateClick: function(info) {
      const confirmDelete = confirm(`¿Eliminar visitas registradas en ${info.dateStr}?`);
      if (confirmDelete) {
        const eventos = calendar.getEvents().filter(e => e.startStr.startsWith(info.dateStr));
        eventos.forEach(e => e.remove());
      }
    }
  });

  calendar.render();

  const form = document.getElementById('form-visita');
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombreVisitante').value;
    const fecha = document.getElementById('fechaVisita').value;

    if (!nombre || !fecha) {
      alert("Por favor completa todos los campos.");
      return;
    }

    calendar.addEvent({
      title: `Visita: ${nombre}`,
      start: fecha,
      allDay: true
    });

    alert("Visita registrada exitosamente.");
    form.reset();
  });
});
