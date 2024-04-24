//essa função vai adicionar uma linha
function adicionarLinha() {
    //Encontra tabela pelo seu Id
    var tabela = document.getElementById('minhaTabela');
    //Cria uma nova linha
    var novaLinha = tabela.insertRow();
    //Adiciona células à nova linha
    var cell1 = novaLinha.insertCell(0);
    var cell2 = novaLinha.insertCell(1);
    //Ira adicionar esses dados às células
    cell1.innerHTML = "John";
    cell2.innerHTML = "30";
}