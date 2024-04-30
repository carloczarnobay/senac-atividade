var par = document.getElementById('deftones');
var numero = [100,20,300,48,500,65,700,800,900,10];
var positivo =  numero.filter(numero => numero > 99 || numero < -99);
par.innerHTML = (positivo);