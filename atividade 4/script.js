function verificarParOuImpar() {
   var numero = parseInt(document.getElementById('numero').value);
    if (numero % 2 === 0) {
        document.getElementById('resultado')
        .innerHTML = numero + " número par.";
    } else if (numero % 2 === 1) {
        document.getElementById('resultado')
        .innerHTML = numero + " número ímpar.";
  }
}