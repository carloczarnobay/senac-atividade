 //Encontra o elemento que será movido pelo seu Id
 var elementToMove = document.getElementById('elementomexido');
 //Encontra o novo local para onde o elemento será movido pelo seu Id
 var newParent = document.getElementById('novoparente');
 //Move o elemento para o novo local
 newParent.appendChild(elementToMove);