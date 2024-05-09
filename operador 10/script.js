function verificar() {
    document.getElementById('resultado').innerHTML =
   document.getElementById('numero').value%3==0 || document.getElementById('numero').value%5==0? "é multiplo por 5 ou por 3":"não é multiplo de 5 e nem de 3"
}