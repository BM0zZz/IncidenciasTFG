/* =========================
   DASHBOARD + INCIDENCIAS
========================= */

/* Referencias DOM */
const incidentTableBody = document.getElementById("incidentTableBody");
const searchIncident = document.getElementById("searchIncident");
const statusFilter = document.getElementById("statusFilter");
const priorityFilter = document.getElementById("priorityFilter");
const formIncidencia = document.getElementById("formIncidencia");

/* Renderizar tabla de incidencias */
function renderIncidents(data) {
  if (!incidentTableBody) return;

  incidentTableBody.innerHTML = ""; // limpiar tabla

  data.forEach((incident) => {
    const row = document.createElement("tr");
    row.classList.add("clickable-row"); // fila clicable
    row.title = "Ver detalle de incidencia";

    /* Contenido fila */
    row.innerHTML = `
      <td>${incident.id}</td>
      <td>${incident.cliente}</td>
      <td>${incident.pedido}</td>
      <td>${incident.tipo}</td>
      <td><span class="${getPriorityClass(incident.prioridad)}">${incident.prioridad}</span></td>
      <td><span class="${getStatusClass(incident.estado)}">${incident.estado}</span></td>
      <td>${incident.fecha}</td>
    `;

    /* Click → guardar ID y redirigir */
    row.addEventListener("click", () => {
      localStorage.setItem("selectedIncidentId", incident.id);
      window.location.href = "incidencia.html";
    });

    incidentTableBody.appendChild(row);
  });
}

/* Filtros de incidencias */
function filterIncidents() {
  if (!searchIncident || !statusFilter || !priorityFilter) return;

  const allIncidents = getAllIncidents();
  const searchValue = searchIncident.value.toLowerCase();
  const statusValue = statusFilter.value;
  const priorityValue = priorityFilter.value;

  const filtered = allIncidents.filter((incident) => {
    /* Buscar por ID o cliente */
    const matchesSearch =
      incident.id.toLowerCase().includes(searchValue) ||
      incident.cliente.toLowerCase().includes(searchValue);

    /* Filtro estado */
    const matchesStatus = statusValue === "all" || incident.estado === statusValue;

    /* Filtro prioridad */
    const matchesPriority = priorityValue === "all" || incident.prioridad === priorityValue;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  renderIncidents(filtered); // pintar resultado
}

/* Render detalle de incidencia */
function renderIncidentDetail() {
  const incidentTitle = document.getElementById("incidentTitle");
  const incidentContent = document.getElementById("incidentContent");
  const noIncidentMessage = document.getElementById("noIncidentMessage");
  const estadoSelect = document.getElementById("estadoSelect");

  if (!incidentTitle || !incidentContent || !noIncidentMessage) return;

  const selectedId = localStorage.getItem("selectedIncidentId");

  /* Si no hay seleccionada */
  if (!selectedId) {
    incidentContent.style.display = "none";
    noIncidentMessage.style.display = "block";
    return;
  }

  /* Buscar incidencia */
  const incident = getAllIncidents().find(item => item.id === selectedId);

  /* Si no existe */
  if (!incident) {
    incidentContent.style.display = "none";
    noIncidentMessage.style.display = "block";
    return;
  }

  /* Mostrar contenido */
  incidentContent.style.display = "block";
  noIncidentMessage.style.display = "none";

  /* Rellenar datos */
  document.getElementById("detailId").textContent = incident.id;
  document.getElementById("detailCliente").textContent = incident.cliente;
  document.getElementById("detailPedido").textContent = incident.pedido;
  document.getElementById("detailTipo").textContent = incident.tipo;
  document.getElementById("detailDescripcion").textContent = incident.descripcion;
  document.getElementById("detailFecha").textContent = incident.fecha;
  document.getElementById("detailResponsable").textContent = incident.responsable;
  incidentTitle.textContent = incident.id;

  const priorityBox = document.getElementById("priorityBox");
  const statusBox = document.getElementById("statusBox");
  const timelineContainer = document.getElementById("timelineContainer");

  /* Prioridad */
  if (priorityBox) {
    priorityBox.innerHTML = `
      <span>Prioridad</span>
      <span class="${getPriorityClass(incident.prioridad)}">${incident.prioridad}</span>
    `;
  }

  /* Estado */
  if (statusBox) {
    statusBox.innerHTML = `
      <span>Estado</span>
      <span class="${getStatusClass(incident.estado)}">${incident.estado}</span>
    `;
  }

  /* Select estado */
  if (estadoSelect) {
    estadoSelect.value = incident.estado;
  }

  /* Historial */
  if (timelineContainer) {
    timelineContainer.innerHTML = incident.historial.map(createTimelineItem).join("");
  }
}

/* Guardar cambio de estado */
function guardarEstado() {
  const selectedId = localStorage.getItem("selectedIncidentId");
  const estadoSelect = document.getElementById("estadoSelect");

  if (!selectedId || !estadoSelect) return;

  const nuevoEstado = estadoSelect.value;
  const saved = getSavedIncidents();
  const savedIndex = saved.findIndex(item => item.id === selectedId);

  /* Si ya existe guardada */
  if (savedIndex !== -1) {
    if (saved[savedIndex].estado !== nuevoEstado) {
      saved[savedIndex].estado = nuevoEstado;

      /* Añadir historial */
      saved[savedIndex].historial.push({
        titulo: "Estado actualizado",
        fecha: new Date().toLocaleString(),
        texto: `La incidencia ha cambiado a estado "${nuevoEstado}".`
      });

      saveUserIncidents(saved);
    }
    renderIncidentDetail();
    return;
  }

  /* Si viene de base */
  const base = baseIncidents.find(item => item.id === selectedId);
  if (!base) return;

  const copy = JSON.parse(JSON.stringify(base));

  if (copy.estado !== nuevoEstado) {
    copy.estado = nuevoEstado;

    copy.historial.push({
      titulo: "Estado actualizado",
      fecha: new Date().toLocaleString(),
      texto: `La incidencia ha cambiado a estado "${nuevoEstado}".`
    });
  }

  saved.push(copy);
  saveUserIncidents(saved);
  renderIncidentDetail();
}

/* Formulario nueva incidencia */
function bindNuevaIncidenciaForm() {
  if (!formIncidencia) return;

  formIncidencia.addEventListener("submit", function (e) {
    e.preventDefault();

    const saved = getSavedIncidents();

    /* Crear nueva incidencia */
    const nueva = {
      id: "INC-" + Math.floor(Math.random() * 10000),
      cliente: document.getElementById("cliente").value,
      pedido: document.getElementById("pedido").value,
      tipo: document.getElementById("tipo").value,
      prioridad: document.getElementById("prioridad").value,
      estado: "Abierta",
      fecha: new Date().toLocaleDateString(),
      descripcion: document.getElementById("descripcion").value,
      responsable: document.getElementById("responsable").value || "Sin asignar",
      historial: [
        {
          titulo: "Incidencia creada",
          fecha: new Date().toLocaleString(),
          texto: "Incidencia registrada desde el sistema."
        }
      ]
    };

    /* Guardar */
    saved.push(nueva);
    saveUserIncidents(saved);

    /* Seleccionar y volver */
    localStorage.setItem("selectedIncidentId", nueva.id);
    window.location.href = "index.html";
  });
}

/* INIT */

/* Cargar tabla */
if (incidentTableBody) {
  renderIncidents(getAllIncidents());
}

/* Eventos filtros */
if (searchIncident) {
  searchIncident.addEventListener("input", filterIncidents);
}
if (statusFilter) {
  statusFilter.addEventListener("change", filterIncidents);
}
if (priorityFilter) {
  priorityFilter.addEventListener("change", filterIncidents);
}

/* Cargar detalle */
renderIncidentDetail();

/* Activar form */
bindNuevaIncidenciaForm();

/* Exponer función global */
window.guardarEstado = guardarEstado;