//função que altera o conteúdo da <div> com a opção selecionada
function changeContent() {
    var opcaoSelecionada = document.getElementById("opcoes").value;
    var minhadiv = document.getElementById("minhadiv");
    //Altera o conteudo da <div> de acordo com a opção selecionada
    switch (opcaoSelecionada){
        case "opcao1":
            minhadiv.textContent = "Conteúdo da opção 1.";
            break;
            case "opcao2":
                minhadiv.textContent = "Conteúdo da opção 2.";
                case "opcao3":
                    minhadiv.textContent = "Conteúdo da opção 3.";
                    break;
                    default:
                        minhadiv.textContent = "Conteúdo padrão.";
                        break;
      }
}