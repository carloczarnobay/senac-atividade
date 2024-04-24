document.addEventListener("DOMContentLoaded", function() {
// Ele vai encontrar o elemento pelo seu Id
var elementToRemove = document.getElementById('elementId')

// Verifica a existencia do elemento
if (elementToRemove) {

    // Vai remover o elemento do DOM
    document.body.removeChild(elementToRemove)
} else {
    console.log('O elemento com o ID fornecido não foi encontrado')
}
});