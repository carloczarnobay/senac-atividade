//Encontra o elemento que deseja mover pelo seu Id
var element = document.getElementById('elementoqueseramovido');
//Encontra o novo pai para onde deseja mover o elemento pelo seu Id
var novopaizao = document.getElementById('novopaizao');
//Move o elemento para o novo pai
novopaizao.appendChild(element);