//Uma instrução em JavaScript que cria uma função chamada "handleClick". Essa função é usada para lidar com eventos de clique em elementos HTML. Quando um botão é clicado, a função pode executar ações específicas.
function handleClick() {
    //linha do código mostra uma mensagem no console do navegador dizendo que o botão foi clicado
    console.log("O botão foi clicado!");
}
//Adiciona um evento quando click no botão
var button = document.getElementById('meubutao');
//Essa linha do código adiciona um ouvinte de eventos ao elemento HTML do botão. Quando clica no botão, a função "handleClick" é chamada
button.addEventListener('click', handleClick);
//Remove o click do botão após 3 segundos
setTimeout(function() {
    //Essa linha de código remove o ouvinte de eventos do elemento HTML do botão. Isso significa que a função "handleClick" não será mais executada quando o botão for clicado
    button.removeEventListener('click', handleClick);
    //Mostra uma mensagem no console do navegador, informando que o evento de clique foi removido
    console.log("O evento de clique foi removido.");
}, 3000);