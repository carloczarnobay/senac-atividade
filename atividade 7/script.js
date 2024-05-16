function a() {
    const par = parseInt(document.getElementById('numero').value);
    const impar = parseInt(document.getElementById('numero2').value);
    const pei = parseInt(document.getElementById('numero3').value);
     for(let i=impar; i<pei; i++) {
        const elemento = document.createElement('p');
        elemento.innerHTML = par + 'x' +i+ '=' + par*i;
        document.body.appendChild(elemento);
     }
    }
    