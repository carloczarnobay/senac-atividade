function verificar()
{document.getElementById("resultado").innerHTML = 
document.getElementById("numero").value % 3 === 0  && document.getElementById("numero").value % 5 === 0 ? "Divisível por 3 e 5" : "Não é divisível por 3 e 5";
}
 