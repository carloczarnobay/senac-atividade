function validarIdade() {
    var idade = parseInt(document.getElementById("idadeInput").value);
    if (idade >= 18) {
        document.getElementById("resultado").innerHTML = "Acesso permitido.";
    } else {
        document.getElementById("resultado").innerHTML = "Acesso restrito. Você é menor de 18 anos.";
    }
}