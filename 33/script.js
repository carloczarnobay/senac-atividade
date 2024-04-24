//Este código seleciona o elemento HTML que tem o Id "email" e o armazena na variável email. Este é o formulário HTML
const emailForm = document.getElementById('email');
  //Elemento HTML que tem o Id "emailinput" e o armazena na variável emailinput. Este é o campo de entrada onde o usuário digita o endereço de e-mail
  const emailInput = document.getElementById('emailinput');
   //Seleciona o elemento HTML que tem o ID "errodemenssagem" e o armazena na variável errorMsg. Este é o elemento onde você deseja exibir uma mensagem de erro
   const errorMsg = document.getElementById('errodemenssagem');
//Adiciona um ouvinte de eventos ao elemento referenciado por email. 
email.addEventListener('enviar', function(event) {
  //Previne o comportamento padrão do evento, que neste caso seria recarregar a página quando o formulário é enviado. Em vez disso, evita isso para que possamos executar nosso próprio código de validação
  event.preventDefault();
   //Esta linha obtém o valor do campo de entrada de e-mail e o armazena na variável email
   const email = emailinput.value;
    //Define uma expressão regular que valida endereços de e-mail. A expressão regular é usada para verificar se o e-mail digitado pelo usuário está em um formato válido
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     //Esta parte do código verifica se o valor do campo de entrada de e-mail não corresponde à expressão regular. Se não corresponder, significa que o e-mail é inválido e a mensagem de erro é exibida
  if (!regex.test(email)) {
    errodemenssagem.style.display = 'block';
    //Se o e-mail for válido, esta parte do código esconde a mensagem de erro
  } else {
    errodemenssagem.style.display = 'none';
    //Você pode prosseguir com o envio do formulário ou realizar outras ações
    console.log('Email válido:', email);
  }
});