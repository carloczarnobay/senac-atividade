function compararNumeros() {     
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);
if (num1 > num2) {
     document.getElementById('resultado').innerHTML = num1 + " ele é maior " + num2;
 } else if (num1 < num2) {
     document.getElementById('resultado').innerHTML = num2 + " ele é maior " + num1;
} else {
     document.getElementById('resultado').innerHTML = "Os números são iguais";
  }
}
