//Este código cria uma constante chamada 'lista' que contém uma matriz de três elementos de texto: "item-1", "item-2" e "item-3"
const lista = ["item-1","item-2","item-3"];
//Essa linha de código busca um elemento HTML com o Id "lista" usando o método 'getElementById' do objeto 'document' e armazena esse elemento na variável 'ul'
const ul=document.getElementById('lista');
//Este trecho do código junta cada elemento na matriz 'lista' e executa uma função para cada elemento. O nome element refere a cada elemento individual da matriz 
lista.forEach(element => {
    //Esta linha de código cria um novo elemento '<li>' usando o método 'createElement' do objeto 'document'. O elemento criado é armazenado na variável 'li'
    const li=document.createElement("li");
    //Esta linha de código define o conteúdo HTML interno do elemento '<li>' criado anteriormente com o conteúdo de cada elemento da matriz 'lista'
    li.innerHTML=element;
    //Essa linha do código adiciona o elemento '<li>' criado anteriormente como um filho do elemento 'ul', colocando-o dentro da lista representada pelo elemento 'ul
    ul.appendChild(li)
    
});