//Essa linha do código seleciona todos os elementos que têm a classe "italico" e os armazena na variável 'lista'
var lista = document.querySelectorAll('.italico');
//Essa linha do código vai sobre todos os elementos armazenados na variável 'lista' e executa uma função para cada elemento
lista.forEach(element => {
    //Essa linha do código define o estilo de todos os elementos na variável 'lista' para itálico.
    element.style= 'font-style: italic';
});