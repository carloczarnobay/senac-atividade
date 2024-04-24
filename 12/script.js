//Ele diz ao navegador para esperar até que o HTML esteja completamente carregado antes de executar o código JavaScript
document.addEventListener("DOMContentLoaded", function() {
    //Ele encontra todos os elementos com a classe especifica
    var elementos = document.querySelectorAll('.minha-classe');
    //Procura cada elemento encontrado e alterar o texto
    elementos.forEach(function(elemento) {
        //Essa linha vai alterar o texto de um elemento HTML para "Texto alterado".
        elemento.textContent = 'Texto alterado';
    });
});
