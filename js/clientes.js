/* =========================
   CLIENTES
========================= */

const clientesTable = document.getElementById("clientesTable");
const searchCliente = document.getElementById("searchCliente");

function getClientes() {
  const orders = getAllOrders();
  const incidents = getAllIncidents();
  const clientesMap = {};

  orders.forEach(order => {
    if (!clientesMap[order.cliente]) {
      clientesMap[order.cliente] = {
        nombre: order.cliente,
        email: order.cliente.toLowerCase().replace(/\s+/g, ".") + "@gmail.com",
        pedidos: 0,
        incidencias: 0
      };
    }
    clientesMap[order.cliente].pedidos++;
  });

  incidents.forEach(inc => {
    if (!clientesMap[inc.cliente]) {
      clientesMap[inc.cliente] = {
        nombre: inc.cliente,
        email: inc.cliente.toLowerCase().replace(/\s+/g, ".") + "@gmail.com",
        pedidos: 0,
        incidencias: 0
      };
    }
    clientesMap[inc.cliente].incidencias++;
  });

  return Object.values(clientesMap);
}

function renderClientes(data) {
  if (!clientesTable) return;

  clientesTable.innerHTML = "";

  data.forEach(cliente => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${cliente.nombre}</td>
      <td>${cliente.email}</td>
      <td>${cliente.pedidos}</td>
      <td>${cliente.incidencias}</td>
    `;
    clientesTable.appendChild(row);
  });
}

function renderClientesStats(clientes) {
  const total = clientes.length;
  const activos = clientes.filter(c => c.pedidos > 0).length;
  const conInc = clientes.filter(c => c.incidencias > 0).length;

  const totalClientes = document.getElementById("totalClientes");
  const clientesActivos = document.getElementById("clientesActivos");
  const clientesIncidencias = document.getElementById("clientesIncidencias");

  if (totalClientes) totalClientes.textContent = total;
  if (clientesActivos) clientesActivos.textContent = activos;
  if (clientesIncidencias) clientesIncidencias.textContent = conInc;
}

function filterClientes() {
  if (!searchCliente) return;

  const clientes = getClientes();
  const search = searchCliente.value.toLowerCase();

  const filtered = clientes.filter(c =>
    c.nombre.toLowerCase().includes(search) ||
    c.email.toLowerCase().includes(search)
  );

  renderClientes(filtered);
}

/* INIT */
const clientes = getClientes();
renderClientes(clientes);
renderClientesStats(clientes);

if (searchCliente) {
  searchCliente.addEventListener("input", filterClientes);
}