function resultado(){
    document.getElementById('resultado').innerHTML =
    document.getElementById('numero').value%4==0? "é multiplo de 4": "não é multiplo de 4";
}