const par = document.getElementById('evy');
 const lista = ["carlos", "bruno", "joao", "dario", "everton", "denise", "rico", "evellyn", "cintia", "diles"];
const maior = lista.map(numero => lista.indexOf(numero));
 par.innerHTML = (maior);