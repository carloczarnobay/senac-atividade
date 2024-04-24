 //Encontra elemento pai pelo seu Id
 var elementopai = document.getElementById('elementopai');
 //Cria um novo elemento filho
 var novoElementoFilho = document.createElement('div');
 //Adiciona algum conteúdo ao novo elemento filho, se for preciso
 novoElementoFilho.textContent = 'Novo Elemento Filho';
 //Adiciona o novo elemento filho ao elemento pai
 elementopai.appendChild(novoElementoFilho);