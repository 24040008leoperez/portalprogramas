function calcular(operacion) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operador = document.getElementById("operador");
  const resultado = document.getElementById("resultado");

  operador.textContent = operacion;

  let res;
  if (isNaN(num1) || isNaN(num2)) {
    resultado.value = "Error";
    return;
  }

  switch (operacion) {
    case '+':
      res = num1 + num2;
      break;
    case '-':
      res = num1 - num2;
      break;
    case '*':
      res = num1 * num2;
      break;
    case '/':
      res = num2 !== 0 ? num1 / num2 : "∞";
      break;
  }

  resultado.value = res;
}
