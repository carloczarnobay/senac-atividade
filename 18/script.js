//Você estára dizendo ao navegador para executar um detreminado código JavaScript assim que o conteúdo HTML estiver disponível para ser trabalhado. Isso é útil para garantir que seu código JavaScript seja executado no momento certo, assim que a estrutura básica da página estiver pronta para ser modificada ou interagida
document.addEventListener("DOMContentLoaded", function() {
 //Esta linha seleciona todos os elementos que têm a classe CSS "evy"
 var elements = document.querySelectorAll('.evy');
 //Ela usa todos os elementos contidos na lista 'elements' e realiza uma ação para cada um deles
 elements.forEach(function(element) {
     //Vai definir o tamanho da fonte de um elemento específico para 20 pixels.
     element.style.fontSize = '20px';
 })});