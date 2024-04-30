function horas() {
     const par = document.getElementById('horario').value;
     const i=new Date();
     const horas=i.getHours(); 
    if ( (horas>=6) && (horas<=12)) {
        const pop= document.getElementById('resultado');
        pop.innerHTML= "Bom Dia" + par;
  }
    if ( (horas>=12) && (horas<=19)) {
        const pop= document.getElementById('resultado');
        pop.innerHTML= "Boa Tarde " + par;
  }
    if ( (horas>=19) || (horas<=6)) {
        const pop= document.getElementById('resultado');
        pop.innerHTML= "Boa Noite" + par;
  }
}