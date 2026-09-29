const prompt = require('prompt-sync')();

let numero1 = Number(prompt("Ingresa el primer número"));
let operacion = prompt("Ingresa el operador (+, -, *, /)");
let numero2 = Number(prompt("Ingresa el segundo número"));
let resultado;


   if (operacion === "+"){
    resultado = numero1 + numero2;
    console.log(resultado);
   } else if ( operacion === "-"){
    resultado = numero1 - numero2;
    console.log(resultado);
   }else if ( operacion === "*"){
    resultado = numero1 * numero2;
    console.log(resultado);
   }else if ( operacion === "/"){
    resultado = numero1 / numero2;
    console.log(resultado);
   } else {
    console.log("Operación no válida");
   }

   

    
  





