const par = document.getElementById('sepultura');
const numero = [1,2,3,4,5,6,7,8,9,10];
const quadrado =  numero.reduce((total , number) => total +(number**2), 0);
par.innerHTML = (quadrado);