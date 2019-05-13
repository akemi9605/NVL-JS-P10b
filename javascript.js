var par = [];
var impar = [];
for (var i=0; i < 50; i++) 
{
  // creo la variable que almacena los número del 1 al 100 aleatorio
  var numeroazar= Math.floor((Math.random() * 100) + 1);
//console.log(numeroazar);

if (/*condicion para saber si es par o impar*/numeroazar % 2 ===0) {
      par.push(numeroazar);
      console.log(par);
  //aqui almaceno en un array todos los pares
  
} else { 
      impar.push(numeroazar);
      console.log(impar);
  //aqui almaceno en un array todos los impares
  
} }
