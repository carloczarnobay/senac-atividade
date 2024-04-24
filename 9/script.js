//Function declara uma função com o nome clickButton
function clickButton() {
    //Essa linha do código busca um elemento HTML com o Id "input" usando o método getElementById do objeto 'document' e armazena esse elemento na variável 'par'
    const par = document.getElementById('input');
    //Este código registra o valor atual do elemento de entrada com o Id "input" no console.
    console.log(par.value);
}