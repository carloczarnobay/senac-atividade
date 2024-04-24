//Este código cria um novo elemento '<p>' e o armazena na variável 'p'
const p = document.createElement('p')
//Essa linha de código define o conteúdo HTML interno do elemento '<p>' criado anteriormente como "Novo Parágrafo"
p.innerHTML = "Novo Parágrafo"
//Essa linha de código adiciona o elemento '<p>' criado anteriormente como filho do elemento 'body' do documento HTML, adicionando ele no final do corpo do documento
document.body.appendChild(p)