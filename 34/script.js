// Seleciona o formulário pelo Id
const formulario = document.getElementById('formulario');
// Seleciona o primeiro campo de entrada pelo Id
const numero1Input = document.getElementById('numero1'); 
// Seleciona o segundo campo de entrada pelo Id
const numero2Input = document.getElementById('numero2');
// Seleciona a div de resultado pelo Id
const resultadoDiv = document.getElementById('resultado');
// Adiciona um ouvinte de evento para o envio do formulário
formulario.addEventListener('submit', function(event) {
    // Previne o comportamento padrão do envio do formulário (recarregar a página)
    event.preventDefault(); 
  // Converte o valor do primeiro campo de entrada para um número
  const numero1 = parseFloat(numero1Input.value);
  // Converte o valor do primeiro campo de entrada para um número
  const numero2 = parseFloat(numero2Input.value);
  // Verifica se ambos os valores inseridos são números válidos
  if (!isNaN(numero1) && !isNaN(numero2)) { 
    // Calcula a soma dos dois números
    const soma = numero1 + numero2; 
    // Exibe o resultado da soma na div de resultado 
    resultadoDiv.textContent = 'A soma é: ' + soma; 
  } else {
// Exibe uma mensagem de erro se pelo menos um dos valores não for um número válido
    resultadoDiv.textContent = 'Por favor, insira números válidos.'; 
  }
});