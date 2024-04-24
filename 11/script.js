//A linha do código declara uma função chamada 'toggleVisibility' que aceita um parâmetro 'elementId'
function toggleVisibility(elementId) {
    //Essa linha do código obtém um elemento HTML pelo seu Id especificado e vai armazenar na variável "element"
    var element = document.getElementById(elementId);
    //Esta linha do código ira verificar se o style CSS "display" do elemento é igual a "none". Isso significa que o elemento está atualmente oculto na página
    if (element.style.display === "none") {
        //Essa linha do código define o style CSS "display" do elemento como "block", sendo possível visualizar ele na página
        element.style.display = "block";
   //Essa parte do código é uma alternativa ao bloco de código anterior. Se o style CSS "display" do elemento não for "none" (se estiver visível), então este bloco de código será executado. Ele define o style CSS "display" do elemento como "none", ficando não visivel na página
    } else {    
        element.style.display = "none";
    }
}
