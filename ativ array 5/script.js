var par = document.getElementById('hp');
var numero = [1,-2,3,-4,5,-6,,7,-8,9,-10];
var positivo =  numero.filter(numero => numero > 0);
par.innerHTML = (positivo);