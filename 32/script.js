//Esta código JavaScript procura por um elemento HTML com o Id "mudarstyle" e armazena uma referência a esse elemento na variável 'styleSelect'
const styleSelect = document.getElementById('mudarstyle');
//Este código JavaScript procura um elemento HTML com o Id "texto" e armazena uma referência a esse elemento na variável 'texto'
const texto = document.getElementById('texto');
//Esse código adiciona uma função para escutar o evento de mudança (change) no elemento referenciado por styleSelect, que provavelmente é um elemento <select>
styleSelect.addEventListener('change', function() {
  //Esse código armazena o valor atual selecionado no elemento <select> referenciado por 'styleSelect' na variável 'selectedStyle'
  const selectedStyle = styleSelect.value;
  //Essa linha de código limpa qualquer formatação de texto existente no elemento referenciado como 'texto'.
  texto.classList.remove('negrito', 'italico', 'sublinhado');
  //Este código verifica se a variável selectedStyle não é igual a normal. Se for verdadeira, significa que uma opção de estilo diferente de 'normal' foi selecionada pelo usuário
  if (selectedStyle !== 'normal') {
    //O código adiciona uma classe CSS chamada selectedStyle ao elemento HTML referenciado pela variável texto. Permitindo aplicar estilos específicos ao elemento com base na escolha feita pelo usuário
    texto.classList.add(selectedStyle);
  }
});