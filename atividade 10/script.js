const par = document.getElementById('cadetu');
let numero = [54,15,69,31,74,65,22,37,94,17];
let maior = -Infinity;
let menor = Infinity;
 for(let i=0; i<numero.length; i++){
    maior = numero[i]>maior? numero[i]:maior; 
    menor = numero[i]<menor? numero[i]:menor; 
 }
 const elemento = document.createElement('p');
 elemento.innerHTML = maior + ' ' + menor;
 document.body.appendChild(elemento);