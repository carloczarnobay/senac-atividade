function verificar()
{document.getElementById("resultado").innerHTML = 
document.getElementById("numero").value % 7 === 0  && document.getElementById("numero").value % 9 === 0 ? "Divisível por 7 e 9" : "Não é divisível por 7 e 9";
}
 