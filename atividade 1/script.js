function verificarNumero() {
    var numero = parseFloat(document.getElementById("numeroInput").value);
    var resultado = document.getElementById("resultado");
    if (numero > 0) {
        document.getElementById("resultado").innerHTML = "O número é positivo.";
    } else if (numero < 0) {
        document.getElementById("resultado").innerHTML = "O número é negativo.";
    } else {
        document.getElementById("resultado").innerHTML = "O número é zero.";
    }
}