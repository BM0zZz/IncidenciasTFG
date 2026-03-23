const baseIncidents = [
  {
    id: "INC-001",
    cliente: "Laura Martínez",
    pedido: "PED-3021",
    tipo: "Producto dañado",
    prioridad: "Urgente",
    estado: "Abierta",
    fecha: "23/03/2026",
    descripcion: "El cliente indica que el vinilo llegó con la funda exterior dañada y una ligera deformación en una de las esquinas. Solicita revisión del pedido y posible reemplazo del producto.",
    responsable: "Marina López",
    historial: [
      {
        titulo: "Incidencia creada",
        fecha: "23/03/2026 - 09:14",
        texto: "El cliente reporta daño en el producto recibido."
      },
      {
        titulo: "Asignación a soporte",
        fecha: "23/03/2026 - 09:32",
        texto: "El caso se asigna al equipo de postventa."
      },
      {
        titulo: "Solicitud de información",
        fecha: "23/03/2026 - 10:05",
        texto: "Se solicitan imágenes del producto al cliente."
      }
    ]
  },
  {
    id: "INC-002",
    cliente: "Carlos Pérez",
    pedido: "PED-3017",
    tipo: "Error de envío",
    prioridad: "Alta",
    estado: "En revisión",
    fecha: "22/03/2026",
    descripcion: "El cliente informa de que la dirección de entrega mostrada en el seguimiento no coincide con la dirección introducida en el pedido.",
    responsable: "Sergio Díaz",
    historial: [
      {
        titulo: "Incidencia registrada",
        fecha: "22/03/2026 - 11:20",
        texto: "Se detecta un posible problema en la dirección del envío."
      },
      {
        titulo: "Revisión logística",
        fecha: "22/03/2026 - 12:10",
        texto: "El caso pasa al área logística para revisar el estado del transporte."
      }
    ]
  },
  {
    id: "INC-003",
    cliente: "Marta Gómez",
    pedido: "PED-3009",
    tipo: "Devolución",
    prioridad: "Media",
    estado: "Resuelta",
    fecha: "21/03/2026",
    descripcion: "La clienta solicitó la devolución del pedido al haber recibido una edición distinta a la esperada. El proceso ya ha sido aceptado.",
    responsable: "Lucía Herrera",
    historial: [
      {
        titulo: "Solicitud recibida",
        fecha: "21/03/2026 - 08:50",
        texto: "La clienta solicita devolución del producto recibido."
      },
      {
        titulo: "Devolución aprobada",
        fecha: "21/03/2026 - 13:25",
        texto: "El equipo valida la solicitud y envía instrucciones para la devolución."
      },
      {
        titulo: "Caso resuelto",
        fecha: "21/03/2026 - 16:40",
        texto: "La incidencia queda resuelta a la espera de recepción en almacén."
      }
    ]
  },
  {
    id: "INC-004",
    cliente: "Iván Romero",
    pedido: "PED-2998",
    tipo: "Pago duplicado",
    prioridad: "Alta",
    estado: "Abierta",
    fecha: "20/03/2026",
    descripcion: "El cliente detecta dos cargos en su cuenta bancaria asociados al mismo pedido y solicita regularización del importe cobrado.",
    responsable: "Paula Martín",
    historial: [
      {
        titulo: "Incidencia abierta",
        fecha: "20/03/2026 - 16:40",
        texto: "El cliente comunica un posible doble cobro."
      },
      {
        titulo: "Pendiente de validación",
        fecha: "20/03/2026 - 17:05",
        texto: "Se revisa la operación con el área de facturación."
      }
    ]
  },
  {
    id: "INC-005",
    cliente: "Sara López",
    pedido: "PED-2985",
    tipo: "Consulta general",
    prioridad: "Baja",
    estado: "Cerrada",
    fecha: "19/03/2026",
    descripcion: "La cliente solicitó información sobre los plazos estimados de reposición de una edición agotada.",
    responsable: "Marcos Gil",
    historial: [
      {
        titulo: "Consulta recibida",
        fecha: "19/03/2026 - 10:15",
        texto: "La clienta consulta la reposición de un producto sin stock."
      },
      {
        titulo: "Respuesta enviada",
        fecha: "19/03/2026 - 11:00",
        texto: "Se responde con la previsión aproximada de reposición."
      },
      {
        titulo: "Incidencia cerrada",
        fecha: "19/03/2026 - 11:18",
        texto: "La consulta se da por cerrada tras enviar la información."
      }
    ]
  },
  {
    id: "INC-006",
    cliente: "Daniel Ruiz",
    pedido: "PED-3024",
    tipo: "Producto incorrecto",
    prioridad: "Urgente",
    estado: "En revisión",
    fecha: "23/03/2026",
    descripcion: "El cliente recibió un disco distinto al solicitado en el pedido. Se está comprobando el error en la preparación del envío.",
    responsable: "Andrea Soto",
    historial: [
      {
        titulo: "Incidencia notificada",
        fecha: "23/03/2026 - 09:48",
        texto: "El cliente comunica recepción de producto incorrecto."
      },
      {
        titulo: "Caso en revisión",
        fecha: "23/03/2026 - 10:22",
        texto: "Se revisa el picking del pedido en almacén."
      },
      {
        titulo: "Esperando confirmación",
        fecha: "23/03/2026 - 11:05",
        texto: "Se solicita comprobación del lote preparado."
      }
    ]
  }
];

const baseOrders = [
  {
    id: "PED-3024",
    cliente: "Daniel Ruiz",
    fecha: "23/03/2026",
    total: "54,99 €",
    estado: "Pendiente",
    direccion: "Calle Alcalá 112, Madrid",
    pago: "Tarjeta",
    incidencia: "INC-006",
    productos: [
      "Hybrid Theory - Linkin Park",
      "Nevermind - Nirvana"
    ],
    historial: [
      {
        titulo: "Pedido registrado",
        fecha: "23/03/2026 - 09:10",
        texto: "El pedido se ha creado correctamente en el sistema."
      },
      {
        titulo: "Pendiente de preparación",
        fecha: "23/03/2026 - 09:30",
        texto: "El pedido está pendiente de revisión en almacén."
      }
    ]
  },
  {
    id: "PED-3023",
    cliente: "Lucía Navarro",
    fecha: "23/03/2026",
    total: "89,50 €",
    estado: "Pagado",
    direccion: "Avenida del Sur 8, Valencia",
    pago: "PayPal",
    incidencia: "Sin incidencia",
    productos: [
      "Back to Black - Amy Winehouse",
      "AM - Arctic Monkeys"
    ],
    historial: [
      {
        titulo: "Pedido pagado",
        fecha: "23/03/2026 - 10:20",
        texto: "El pago del pedido se ha confirmado correctamente."
      }
    ]
  },
  {
    id: "PED-3022",
    cliente: "Andrés Moreno",
    fecha: "22/03/2026",
    total: "34,99 €",
    estado: "Enviado",
    direccion: "Calle Mar 41, Cádiz",
    pago: "Tarjeta",
    incidencia: "Sin incidencia",
    productos: [
      "Random Access Memories - Daft Punk"
    ],
    historial: [
      {
        titulo: "Pedido preparado",
        fecha: "22/03/2026 - 12:00",
        texto: "El pedido ha sido preparado en almacén."
      },
      {
        titulo: "Pedido enviado",
        fecha: "22/03/2026 - 16:15",
        texto: "El pedido ha salido del almacén con destino al cliente."
      }
    ]
  },
  {
    id: "PED-3021",
    cliente: "Laura Martínez",
    fecha: "22/03/2026",
    total: "64,00 €",
    estado: "Entregado",
    direccion: "Calle Mayor 22, Toledo",
    pago: "Tarjeta",
    incidencia: "INC-001",
    productos: [
      "The Dark Side of the Moon - Pink Floyd",
      "Abbey Road - The Beatles"
    ],
    historial: [
      {
        titulo: "Pedido entregado",
        fecha: "22/03/2026 - 18:45",
        texto: "El pedido ha sido entregado al cliente."
      }
    ]
  },
  {
    id: "PED-2998",
    cliente: "Iván Romero",
    fecha: "20/03/2026",
    total: "72,50 €",
    estado: "Pagado",
    direccion: "Calle Prado 17, Sevilla",
    pago: "Transferencia",
    incidencia: "INC-004",
    productos: [
      "Ten - Pearl Jam",
      "OK Computer - Radiohead"
    ],
    historial: [
      {
        titulo: "Pago registrado",
        fecha: "20/03/2026 - 16:00",
        texto: "Se ha confirmado el pago del pedido."
      }
    ]
  }
];

function getSavedIncidents() {
  return JSON.parse(localStorage.getItem("incidencias")) || [];
}

function getAllIncidents() {
  const saved = getSavedIncidents();
  const savedIds = new Set(saved.map(item => item.id));
  const mergedBase = baseIncidents.filter(item => !savedIds.has(item.id));
  return [...mergedBase, ...saved];
}

function saveUserIncidents(updatedUserIncidents) {
  localStorage.setItem("incidencias", JSON.stringify(updatedUserIncidents));
}

function getSavedOrders() {
  return JSON.parse(localStorage.getItem("pedidos")) || [];
}

function getAllOrders() {
  const saved = getSavedOrders();
  const savedIds = new Set(saved.map(item => item.id));
  const mergedBase = baseOrders.filter(item => !savedIds.has(item.id));
  return [...mergedBase, ...saved];
}

function saveUserOrders(updatedUserOrders) {
  localStorage.setItem("pedidos", JSON.stringify(updatedUserOrders));
}

function getStatusClass(status) {
  switch (status) {
    case "Abierta":
      return "badge badge-open";
    case "En revisión":
      return "badge badge-review";
    case "Resuelta":
      return "badge badge-resolved";
    case "Cerrada":
      return "badge badge-closed";
    default:
      return "badge";
  }
}

function getPriorityClass(priority) {
  switch (priority) {
    case "Baja":
      return "badge badge-low";
    case "Media":
      return "badge badge-medium";
    case "Alta":
      return "badge badge-high";
    case "Urgente":
      return "badge badge-urgent";
    default:
      return "badge";
  }
}

function getOrderStatusClass(status) {
  switch (status) {
    case "Pendiente":
      return "badge badge-pending";
    case "Pagado":
      return "badge badge-paid";
    case "Enviado":
      return "badge badge-shipped";
    case "Entregado":
      return "badge badge-delivered";
    case "Cancelado":
      return "badge badge-open";
    default:
      return "badge";
  }
}

/* DASHBOARD INCIDENCIAS */
const incidentTableBody = document.getElementById("incidentTableBody");
const ordersTableBody = document.getElementById("ordersTableBody");
const searchIncident = document.getElementById("searchIncident");
const statusFilter = document.getElementById("statusFilter");
const priorityFilter = document.getElementById("priorityFilter");

function renderIncidents(data) {
  if (!incidentTableBody) return;

  incidentTableBody.innerHTML = "";

  data.forEach((incident) => {
    const row = document.createElement("tr");
    row.classList.add("clickable-row");
    row.title = "Ver detalle de incidencia";

    row.innerHTML = `
      <td>${incident.id}</td>
      <td>${incident.cliente}</td>
      <td>${incident.pedido}</td>
      <td>${incident.tipo}</td>
      <td><span class="${getPriorityClass(incident.prioridad)}">${incident.prioridad}</span></td>
      <td><span class="${getStatusClass(incident.estado)}">${incident.estado}</span></td>
      <td>${incident.fecha}</td>
    `;

    row.addEventListener("click", () => {
      localStorage.setItem("selectedIncidentId", incident.id);
      window.location.href = "incidencia.html";
    });

    incidentTableBody.appendChild(row);
  });
}

function renderOrders() {
  if (!ordersTableBody) return;

  const orders = getAllOrders(); // 🔥 ESTA LÍNEA ES LA CLAVE

  ordersTableBody.innerHTML = "";

  orders.slice(0, 4).forEach((order) => {
    const row = document.createElement("tr");
    row.classList.add("clickable-row");

    row.innerHTML = `
      <td>${order.id}</td>
      <td>${order.cliente}</td>
      <td>${order.fecha}</td>
      <td>${order.total}</td>
      <td><span class="${getOrderStatusClass(order.estado)}">${order.estado}</span></td>
    `;

    row.addEventListener("click", () => {
      localStorage.setItem("selectedOrderId", order.id);
      window.location.href = "pedido-detalle.html";
    });

    ordersTableBody.appendChild(row);
  });
}

function filterIncidents() {
  if (!searchIncident || !statusFilter || !priorityFilter) return;

  const allIncidents = getAllIncidents();
  const searchValue = searchIncident.value.toLowerCase();
  const statusValue = statusFilter.value;
  const priorityValue = priorityFilter.value;

  const filtered = allIncidents.filter((incident) => {
    const matchesSearch =
      incident.id.toLowerCase().includes(searchValue) ||
      incident.cliente.toLowerCase().includes(searchValue);

    const matchesStatus =
      statusValue === "all" || incident.estado === statusValue;

    const matchesPriority =
      priorityValue === "all" || incident.prioridad === priorityValue;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  renderIncidents(filtered);
}

/* DETALLE INCIDENCIA */
function renderIncidentDetail() {
  const incidentTitle = document.getElementById("incidentTitle");
  const incidentContent = document.getElementById("incidentContent");
  const noIncidentMessage = document.getElementById("noIncidentMessage");
  const estadoSelect = document.getElementById("estadoSelect");

  if (!incidentTitle || !incidentContent || !noIncidentMessage) return;

  const selectedId = localStorage.getItem("selectedIncidentId");

  if (!selectedId) {
    incidentContent.style.display = "none";
    noIncidentMessage.style.display = "block";
    return;
  }

  const allIncidents = getAllIncidents();
  const incident = allIncidents.find(item => item.id === selectedId);

  if (!incident) {
    incidentContent.style.display = "none";
    noIncidentMessage.style.display = "block";
    return;
  }

  incidentContent.style.display = "block";
  noIncidentMessage.style.display = "none";

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

  priorityBox.innerHTML = `
    <span>Prioridad</span>
    <span class="${getPriorityClass(incident.prioridad)}">${incident.prioridad}</span>
  `;

  statusBox.innerHTML = `
    <span>Estado</span>
    <span class="${getStatusClass(incident.estado)}">${incident.estado}</span>
  `;

  if (estadoSelect) {
    estadoSelect.value = incident.estado;
  }

  timelineContainer.innerHTML = "";

  incident.historial.forEach((item) => {
    const timelineItem = document.createElement("div");
    timelineItem.classList.add("timeline-item");

    timelineItem.innerHTML = `
      <h4>${item.titulo}</h4>
      <span>${item.fecha}</span>
      <p>${item.texto}</p>
    `;

    timelineContainer.appendChild(timelineItem);
  });
}

function guardarEstado() {
  const selectedId = localStorage.getItem("selectedIncidentId");
  const estadoSelect = document.getElementById("estadoSelect");

  if (!selectedId || !estadoSelect) return;

  const nuevoEstado = estadoSelect.value;
  const userIncidents = getSavedIncidents();
  const userIndex = userIncidents.findIndex(item => item.id === selectedId);

  if (userIndex !== -1) {
    if (userIncidents[userIndex].estado !== nuevoEstado) {
      userIncidents[userIndex].estado = nuevoEstado;
      userIncidents[userIndex].historial.push({
        titulo: "Estado actualizado",
        fecha: new Date().toLocaleString(),
        texto: `La incidencia ha cambiado a estado "${nuevoEstado}".`
      });
      saveUserIncidents(userIncidents);
    }

    renderIncidentDetail();
    return;
  }

  const baseIncident = baseIncidents.find(item => item.id === selectedId);

  if (baseIncident) {
    const copiedIncident = JSON.parse(JSON.stringify(baseIncident));

    if (copiedIncident.estado !== nuevoEstado) {
      copiedIncident.estado = nuevoEstado;
      copiedIncident.historial.push({
        titulo: "Estado actualizado",
        fecha: new Date().toLocaleString(),
        texto: `La incidencia ha cambiado a estado "${nuevoEstado}".`
      });
    }

    const existingUserIndex = userIncidents.findIndex(item => item.id === selectedId);

    if (existingUserIndex !== -1) {
      userIncidents[existingUserIndex] = copiedIncident;
    } else {
      userIncidents.push(copiedIncident);
    }

    saveUserIncidents(userIncidents);
    renderIncidentDetail();
  }
}

/* GESTIÓN PEDIDOS */
const ordersManagementTableBody = document.getElementById("ordersManagementTableBody");
const searchOrder = document.getElementById("searchOrder");
const orderStatusFilter = document.getElementById("orderStatusFilter");

function renderOrdersManagement(data) {
  if (!ordersManagementTableBody) return;

  ordersManagementTableBody.innerHTML = "";

  data.forEach((order) => {
    const row = document.createElement("tr");
    row.classList.add("clickable-row");
    row.title = "Ver detalle de pedido";

    row.innerHTML = `
      <td>${order.id}</td>
      <td>${order.cliente}</td>
      <td>${order.fecha}</td>
      <td>${order.total}</td>
      <td><span class="${getOrderStatusClass(order.estado)}">${order.estado}</span></td>
    `;

    row.addEventListener("click", () => {
      localStorage.setItem("selectedOrderId", order.id);
      window.location.href = "pedido-detalle.html";
    });

    ordersManagementTableBody.appendChild(row);
  });
}

function filterOrders() {
  if (!searchOrder || !orderStatusFilter) return;

  const allOrders = getAllOrders();
  const searchValue = searchOrder.value.toLowerCase();
  const statusValue = orderStatusFilter.value;

  const filtered = allOrders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchValue) ||
      order.cliente.toLowerCase().includes(searchValue);

    const matchesStatus =
      statusValue === "all" || order.estado === statusValue;

    return matchesSearch && matchesStatus;
  });

  renderOrdersManagement(filtered);
}

/* DETALLE PEDIDO */
function renderOrderDetail() {
  const orderContent = document.getElementById("orderContent");
  const noOrderMessage = document.getElementById("noOrderMessage");
  const orderTitle = document.getElementById("orderTitle");
  const pedidoEstadoSelect = document.getElementById("pedidoEstadoSelect");

  if (!orderContent || !noOrderMessage || !orderTitle) return;

  const selectedOrderId = localStorage.getItem("selectedOrderId");

  if (!selectedOrderId) {
    orderContent.style.display = "none";
    noOrderMessage.style.display = "block";
    return;
  }

  const allOrders = getAllOrders();
  const order = allOrders.find(item => item.id === selectedOrderId);

  if (!order) {
    orderContent.style.display = "none";
    noOrderMessage.style.display = "block";
    return;
  }

  orderContent.style.display = "block";
  noOrderMessage.style.display = "none";

  orderTitle.textContent = order.id;
  document.getElementById("detailOrderId").textContent = order.id;
  document.getElementById("detailOrderCliente").textContent = order.cliente;
  document.getElementById("detailOrderFecha").textContent = order.fecha;
  document.getElementById("detailOrderTotal").textContent = order.total;
  document.getElementById("detailOrderDireccion").textContent = order.direccion;
  document.getElementById("detailOrderPago").textContent = order.pago;
  document.getElementById("detailOrderIncidencia").textContent = order.incidencia;

  const pedidoEstadoBox = document.getElementById("pedidoEstadoBox");
  pedidoEstadoBox.innerHTML = `
    <span>Estado</span>
    <span class="${getOrderStatusClass(order.estado)}">${order.estado}</span>
  `;

  if (pedidoEstadoSelect) {
    pedidoEstadoSelect.value = order.estado;
  }

  const orderProductsList = document.getElementById("orderProductsList");
  orderProductsList.innerHTML = `
    <ul style="padding-left: 20px; line-height: 1.9; color: #e5e7eb;">
      ${order.productos.map(producto => `<li>${producto}</li>`).join("")}
    </ul>
  `;

  const orderTimelineContainer = document.getElementById("orderTimelineContainer");
  orderTimelineContainer.innerHTML = "";

  order.historial.forEach((item) => {
    const timelineItem = document.createElement("div");
    timelineItem.classList.add("timeline-item");

    timelineItem.innerHTML = `
      <h4>${item.titulo}</h4>
      <span>${item.fecha}</span>
      <p>${item.texto}</p>
    `;

    orderTimelineContainer.appendChild(timelineItem);
  });
}

function guardarEstadoPedido() {
  const selectedOrderId = localStorage.getItem("selectedOrderId");
  const pedidoEstadoSelect = document.getElementById("pedidoEstadoSelect");

  if (!selectedOrderId || !pedidoEstadoSelect) return;

  const nuevoEstado = pedidoEstadoSelect.value;
  const userOrders = getSavedOrders();
  const userIndex = userOrders.findIndex(item => item.id === selectedOrderId);

  if (userIndex !== -1) {
    if (userOrders[userIndex].estado !== nuevoEstado) {
      userOrders[userIndex].estado = nuevoEstado;
      userOrders[userIndex].historial.push({
        titulo: "Estado actualizado",
        fecha: new Date().toLocaleString(),
        texto: `El pedido ha cambiado a estado "${nuevoEstado}".`
      });
      saveUserOrders(userOrders);
    }

    renderOrderDetail();
    return;
  }

  const baseOrder = baseOrders.find(item => item.id === selectedOrderId);

  if (baseOrder) {
    const copiedOrder = JSON.parse(JSON.stringify(baseOrder));

    if (copiedOrder.estado !== nuevoEstado) {
      copiedOrder.estado = nuevoEstado;
      copiedOrder.historial.push({
        titulo: "Estado actualizado",
        fecha: new Date().toLocaleString(),
        texto: `El pedido ha cambiado a estado "${nuevoEstado}".`
      });
    }

    const existingUserIndex = userOrders.findIndex(item => item.id === selectedOrderId);

    if (existingUserIndex !== -1) {
      userOrders[existingUserIndex] = copiedOrder;
    } else {
      userOrders.push(copiedOrder);
    }

    saveUserOrders(userOrders);
    renderOrderDetail();
  }
}

/* CREAR INCIDENCIA */
const form = document.getElementById("formIncidencia");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const userIncidents = getSavedIncidents();

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

    userIncidents.push(nueva);
    saveUserIncidents(userIncidents);

    localStorage.setItem("selectedIncidentId", nueva.id);
    window.location.href = "index.html";
  });
}

/* EVENTOS */
if (searchIncident) {
  searchIncident.addEventListener("input", filterIncidents);
}

if (statusFilter) {
  statusFilter.addEventListener("change", filterIncidents);
}

if (priorityFilter) {
  priorityFilter.addEventListener("change", filterIncidents);
}

if (searchOrder) {
  searchOrder.addEventListener("input", filterOrders);
}

if (orderStatusFilter) {
  orderStatusFilter.addEventListener("change", filterOrders);
}

/* INIT */
renderIncidents(getAllIncidents());
renderOrders();
renderIncidentDetail();
renderOrdersManagement(getAllOrders());
renderOrderDetail();

/* CLIENTES */

// Generar clientes a partir de pedidos e incidencias
function getClientes() {
  const orders = getAllOrders();
  const incidents = getAllIncidents();

  const clientesMap = {};

  // Contar pedidos
  orders.forEach(order => {
    if (!clientesMap[order.cliente]) {
      clientesMap[order.cliente] = {
        nombre: order.cliente,
        email: order.cliente.toLowerCase().replace(" ", ".") + "@gmail.com",
        pedidos: 0,
        incidencias: 0
      };
    }
    clientesMap[order.cliente].pedidos++;
  });

  // Contar incidencias
  incidents.forEach(inc => {
    if (!clientesMap[inc.cliente]) {
      clientesMap[inc.cliente] = {
        nombre: inc.cliente,
        email: inc.cliente.toLowerCase().replace(" ", ".") + "@gmail.com",
        pedidos: 0,
        incidencias: 0
      };
    }
    clientesMap[inc.cliente].incidencias++;
  });

  return Object.values(clientesMap);
}

// Render tabla
function renderClientes(data) {
  const table = document.getElementById("clientesTable");
  if (!table) return;

  table.innerHTML = "";

  data.forEach(cliente => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${cliente.nombre}</td>
      <td>${cliente.email}</td>
      <td>${cliente.pedidos}</td>
      <td>${cliente.incidencias}</td>
    `;

    table.appendChild(row);
  });
}

// Stats
function renderClientesStats(clientes) {
  const total = clientes.length;
  const activos = clientes.filter(c => c.pedidos > 0).length;
  const conInc = clientes.filter(c => c.incidencias > 0).length;

  document.getElementById("totalClientes").textContent = total;
  document.getElementById("clientesActivos").textContent = activos;
  document.getElementById("clientesIncidencias").textContent = conInc;
}

// Filtro
const searchCliente = document.getElementById("searchCliente");

function filterClientes() {
  const clientes = getClientes();
  const search = searchCliente.value.toLowerCase();

  const filtered = clientes.filter(c =>
    c.nombre.toLowerCase().includes(search)
  );

  renderClientes(filtered);
}

// INIT CLIENTES
const clientes = getClientes();
renderClientes(clientes);
renderClientesStats(clientes);

if (searchCliente) {
  searchCliente.addEventListener("input", filterClientes);
}