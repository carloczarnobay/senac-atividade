function a() {
    const par = parseInt(document.getElementById('numero').value);
    const impar = parseInt(document.getElementById('numero2').value);
    const pei = parseInt(document.getElementById('numero3').value);
     if(par===impar && par===pei && impar==pei) {
      let equilatero = document.createElement('p');
      equilatero.innerHTML = 'é equilatero';
      document.body.appendChild(equilatero)
     
     else if(par===impar===pei) {
        let equilatero = document.createElement('p');
        equilatero.innerHTML = 'é equilatero';
        document.body.appendChild(equilatero)
       }
     else (par===impar || par===pei || impar===pei) {
        let isosceles = document.createElement('p');
        isosceles.innerHTML = 'é isósceles';
        document.body.appendChild(isosceles)
       }
     
     }  else {
        let escaleno= document.createElement('p');
        escaleno.innerHTML = 'é escaleno';
        document.body.appendChild(escaleno)
       }
    }
