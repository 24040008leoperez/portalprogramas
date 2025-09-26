function calcularNomina() {
  let horas = parseFloat(document.getElementById("horas").value);
  let costo = parseFloat(document.getElementById("costo").value);

  if (isNaN(horas) || isNaN(costo)) {
    alert("Por favor, ingresa las horas y el costo por hora.");
    return;
  }

  // Horas normales hasta 40
  let horasNormales = Math.min(horas, 40);
  // Horas extras
  let horasExtras = horas > 40 ? horas - 40 : 0;

  // Cálculos
  let subtotal = (horasNormales * costo) + (horasExtras * costo * 2); // extras pagan doble
  let ispt = subtotal * 0.10;
  let total = subtotal - ispt;

  // Mostrar en campos
  document.getElementById("res1").value = horasNormales;
  document.getElementById("res2").value = horasExtras;
  document.getElementById("res3").value = subtotal.toFixed(2);
  document.getElementById("res4").value = ispt.toFixed(2);
  document.getElementById("res5").value = total.toFixed(2);
}

function limpiarFormulario() {
  document.getElementById("formNomina").reset();
  document.getElementById("res1").value = "";
  document.getElementById("res2").value = "";
  document.getElementById("res3").value = "";
  document.getElementById("res4").value = "";
  document.getElementById("res5").value = "";
}
