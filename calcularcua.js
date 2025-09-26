function calcularCuadrado() {
    let numero = document.getElementById("numero").value;
    let cuadrado = numero * numero;
    document.getElementById("resultado").value = cuadrado;
}

function borrar() {
    document.form1.numero.value = "";
    document.form1.resultado.value = "";
    document.getElementById("numero").focus(); 
}
