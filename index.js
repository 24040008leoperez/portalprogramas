function cargarPagina(pagina) {
  const contenido = document.getElementById("contenido");
  const visor = document.getElementById("visor");

  if (pagina === "inicio") {
    // Mostrar mensaje de bienvenida
    visor.style.display = "none";
    contenido.style.display = "block";
  } else {
    // Cargar el programa dentro del iframe
    visor.src = pagina;
    visor.style.display = "block";
    contenido.style.display = "none";
  }
}
