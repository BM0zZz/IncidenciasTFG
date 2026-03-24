/* =========================
   PEDIDOS
========================= */

/* Referencias DOM */
const ordersTableBody = document.getElementById("ordersTableBody");
const ordersManagementTableBody = document.getElementById("ordersManagementTableBody");
const searchOrder = document.getElementById("searchOrder");
const orderStatusFilter = document.getElementById("orderStatusFilter");

/* Render pedidos recientes (dashboard) */
function renderOrdersRecent() {
  if (!ordersTableBody) return;

  const orders = getAllOrders();
  ordersTableBody.innerHTML = "";

  /* Solo los 4 primeros */
  orders.slice(0, 4).forEach((order) => {
    const row = document.createElement("tr");
    row.classList.add("clickable-row");
    row.title = "Ver detalle del pedido";

    /* Contenido fila */
    row.innerHTML = `
      <td>${order.id}</td>
      <td>${order.cliente}</td>
      <td>${order.fecha}</td>
      <td>${order.total}</td>
      <td><span class="${getOrderStatusClass(order.estado)}">${order.estado}</span></td>
    `;

    /* Click → guardar ID y redirigir */
    row.addEventListener("click", () => {
      localStorage.setItem("selectedOrderId", order.id);
      window.location.href = "pedido-detalle.html";
    });

    ordersTableBody.appendChild(row);
  });
}

/* Render listado completo de pedidos */
function renderOrdersManagement(data) {
  if (!ordersManagementTableBody) return;

  ordersManagementTableBody.innerHTML = "";

  data.forEach((order) => {
    const row = document.createElement("tr");
    row.classList.add("clickable-row");
    row.title = "Ver detalle de pedido";

    /* Contenido fila */
    row.innerHTML = `
      <td>${order.id}</td>
      <td>${order.cliente}</td>
      <td>${order.fecha}</td>
      <td>${order.total}</td>
      <td><span class="${getOrderStatusClass(order.estado)}">${order.estado}</span></td>
    `;

    /* Click  detalle */
    row.addEventListener("click", () => {
      localStorage.setItem("selectedOrderId", order.id);
      window.location.href = "pedido-detalle.html";
    });

    ordersManagementTableBody.appendChild(row);
  });
}

/* Filtros pedidos */
function filterOrders() {
  if (!searchOrder || !orderStatusFilter) return;

  const allOrders = getAllOrders();
  const searchValue = searchOrder.value.toLowerCase();
  const statusValue = orderStatusFilter.value;

  const filtered = allOrders.filter((order) => {
    /* Buscar por ID o cliente */
    const matchesSearch =
      order.id.toLowerCase().includes(searchValue) ||
      order.cliente.toLowerCase().includes(searchValue);

    /* Filtrar por estado */
    const matchesStatus = statusValue === "all" || order.estado === statusValue;

    return matchesSearch && matchesStatus;
  });

  renderOrdersManagement(filtered);
}

/* Render detalle pedido */
function renderOrderDetail() {
  const orderContent = document.getElementById("orderContent");
  const noOrderMessage = document.getElementById("noOrderMessage");
  const orderTitle = document.getElementById("orderTitle");
  const pedidoEstadoSelect = document.getElementById("pedidoEstadoSelect");

  if (!orderContent || !noOrderMessage || !orderTitle) return;

  const selectedOrderId = localStorage.getItem("selectedOrderId");

  /* Si no hay pedido seleccionado */
  if (!selectedOrderId) {
    orderContent.style.display = "none";
    noOrderMessage.style.display = "block";
    return;
  }

  const order = getAllOrders().find(item => item.id === selectedOrderId);

  /* Si no existe */
  if (!order) {
    orderContent.style.display = "none";
    noOrderMessage.style.display = "block";
    return;
  }

  /* Mostrar contenido */
  orderContent.style.display = "block";
  noOrderMessage.style.display = "none";

  /* Rellenar datos */
  orderTitle.textContent = order.id;
  document.getElementById("detailOrderId").textContent = order.id;
  document.getElementById("detailOrderCliente").textContent = order.cliente;
  document.getElementById("detailOrderFecha").textContent = order.fecha;
  document.getElementById("detailOrderTotal").textContent = order.total;
  document.getElementById("detailOrderDireccion").textContent = order.direccion;
  document.getElementById("detailOrderPago").textContent = order.pago;
  document.getElementById("detailOrderIncidencia").textContent = order.incidencia;

  /* Badge estado */
  const pedidoEstadoBox = document.getElementById("pedidoEstadoBox");
  if (pedidoEstadoBox) {
    pedidoEstadoBox.innerHTML = `
      <span>Estado</span>
      <span class="${getOrderStatusClass(order.estado)}">${order.estado}</span>
    `;
  }

  /* Select estado */
  if (pedidoEstadoSelect) {
    pedidoEstadoSelect.value = order.estado;
  }

  /* Lista productos */
  const orderProductsList = document.getElementById("orderProductsList");
  if (orderProductsList) {
    orderProductsList.innerHTML = `
      <ul style="padding-left: 20px; line-height: 1.9; color: #e5e7eb;">
        ${order.productos.map(producto => `<li>${producto}</li>`).join("")}
      </ul>
    `;
  }

  /* Historial */
  const orderTimelineContainer = document.getElementById("orderTimelineContainer");
  if (orderTimelineContainer) {
    orderTimelineContainer.innerHTML = order.historial.map(createTimelineItem).join("");
  }
}

/* Guardar cambio de estado */
function guardarEstadoPedido() {
  const selectedOrderId = localStorage.getItem("selectedOrderId");
  const pedidoEstadoSelect = document.getElementById("pedidoEstadoSelect");

  if (!selectedOrderId || !pedidoEstadoSelect) return;

  const nuevoEstado = pedidoEstadoSelect.value;
  const saved = getSavedOrders();
  const savedIndex = saved.findIndex(item => item.id === selectedOrderId);

  /* Si ya está guardado */
  if (savedIndex !== -1) {
    if (saved[savedIndex].estado !== nuevoEstado) {
      saved[savedIndex].estado = nuevoEstado;

      /* Añadir historial */
      saved[savedIndex].historial.push({
        titulo: "Estado actualizado",
        fecha: new Date().toLocaleString(),
        texto: `El pedido ha cambiado a estado "${nuevoEstado}".`
      });

      saveUserOrders(saved);
    }
    renderOrderDetail();
    return;
  }

  /* Si es base */
  const base = baseOrders.find(item => item.id === selectedOrderId);
  if (!base) return;

  const copy = JSON.parse(JSON.stringify(base));

  if (copy.estado !== nuevoEstado) {
    copy.estado = nuevoEstado;

    copy.historial.push({
      titulo: "Estado actualizado",
      fecha: new Date().toLocaleString(),
      texto: `El pedido ha cambiado a estado "${nuevoEstado}".`
    });
  }

  saved.push(copy);
  saveUserOrders(saved);
  renderOrderDetail();
}

/* INIT */

/* Dashboard */
renderOrdersRecent();

/* Página pedidos */
if (ordersManagementTableBody) {
  renderOrdersManagement(getAllOrders());
}

/* Filtros */
if (searchOrder) {
  searchOrder.addEventListener("input", filterOrders);
}
if (orderStatusFilter) {
  orderStatusFilter.addEventListener("change", filterOrders);
}

/* Detalle */
renderOrderDetail();

/* Exponer función */
window.guardarEstadoPedido = guardarEstadoPedido;