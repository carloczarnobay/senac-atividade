//É a declaração de uma função chamada "addItem"
function addItem() {
    //Essa linha do código está obtendo o valor do elemento de entrada de texto com o Id "novo-item-texto" e armazenando na variável "text"
    var text = document.getElementById('novo-item-texto').value;
    //Esse código está obtendo o elemento de lista com o Id "minha-lista" e armazenando-o na variável "list"
    var list = document.getElementById('minha-lista');
    //Esse código está criando um novo elemento de lista '<li>' e armazena na variável "newItem"
    var newItem = document.createElement('li');
    //Essa linha do código atribui o texto inserido pelo usuário ao novo item que será adicionado à lista
    newItem.textContent = text;
    //Este código adiciona o novo item à lista existente
    list.appendChild(newItem);
}