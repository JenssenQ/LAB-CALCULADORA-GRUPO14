const prompt = require('prompt-sync')();


function pedirNumero(mensaje){
    let numero = Number(prompt(mensaje));
    return numero
}

function calcular(numero1, operacion, numero2){
    if (operacion === "+"){
    let resultado = numero1 + numero2;
    return resultado
    
   } else if ( operacion === "-"){
    let resultado = numero1 - numero2;
    return resultado
  
   }else if ( operacion === "*"){
    let resultado = numero1 * numero2;
    return resultado
   }
   else if ( operacion === "/"){
    if(numero2 === 0){
    return "No se puede divir entre 0"
    }
    else{let resultado = numero1 / numero2;
    return resultado}
} else {
    return "Operador no valido"
}

}

function mostrarResultado(resultado){
console.log(`El resultado es: ${resultado}`);

}

function atenderOperacion(){
    let numero1 = pedirNumero("Ingrese el número: ");
    let operacion = prompt("Ingresa el operador (+, -, *, /): ");
    let numero2 = pedirNumero("Ingrese el segundo número: ");
    let r = calcular(numero1,operacion,numero2);
    let mostrar =mostrarResultado(r);
    return mostrar
}

let activo = true;
while(activo === true){

atenderOperacion();
    
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

