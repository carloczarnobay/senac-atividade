//Função para converter o texto para maiúsculas
function convertToUpperCase() {
    //Obtém o campo de entrada pelo ID
    const textoInput = document.getElementById('textoInput');
    //Obtém o valor do texto inserido pelo usuário
    const texto = textoInput.value;
    //Converte o texto para maiúsculas
    const textoMaiusculo = texto.toUpperCase();
    //Exibe o texto convertido na div de resultado
    document.getElementById('resultado').textContent = textoMaiusculo;
}