const prompt = require('prompt-sync')();

let resultado;

let activo = true;


while(activo === true){

    

    let numero1 = Number(prompt("Ingresa el primer número: "));
    let operacion = prompt("Ingresa el operador (+, -, *, /): ");
    let numero2 = Number(prompt("Ingresa el segundo número: "));

    
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
    console.log("Operador no valido.");
}

let pregunta = prompt("¿Quieres hacer otra operación? s/n: ");
 if(pregunta === "s"){
    activo;
 }else if (pregunta === "n"){
    activo = false;
    console.log("Que tenga un buen día!");
 } else {
    console.log("Respuesta no valida.");
    activo = false;
 }
    
}
   
   

    
  





