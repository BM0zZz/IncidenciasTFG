// Referencias al DOM
const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");

/* Si ya está logueado, entra directo al panel */
if (localStorage.getItem("isLoggedIn") === "true") {
  window.location.href = "index.html";
}

/* Evento submit del formulario */
loginForm.addEventListener("submit", function (e) {
  e.preventDefault(); // evita recargar la página

  // Cogemos valores introducidos
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  /* VALIDACIÓN SIMPLE (acepta cualquier credencial) */
  if (email !== "" && password !== "") {

    // Guardamos sesión
    localStorage.setItem("isLoggedIn", "true");

    // Guardamos el usuario para usarlo luego en el panel
    localStorage.setItem("loggedUserEmail", email);

    // Redirigimos al dashboard
    window.location.href = "index.html";

  } else {
    // Error si está vacío
    loginError.textContent = "Introduce email y contraseña.";
  }
});