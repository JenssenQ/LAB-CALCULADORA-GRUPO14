const prompt = require('prompt-sync')();


function pedirNumero(mensaje){
    let numero =Number(prompt(mensaje));
    return numero
}

function calcular(numero1, operacion, numero2){
    if (operacion === "+"){
    return resultado = numero1 + numero2;
    
   } else if ( operacion === "-"){
    return resultado = numero1 - numero2;
  
   }else if ( operacion === "*"){
    return resultado = numero1 * numero2;
    
   }else if ( operacion === "/"){
    return resultado = numero1 / numero2;
} else {
    return "Operador no valido"
}

}

function mostrarResultado(resultado){
console.log(resultado);

}

function atenderOperacion(){
    let numero1 = pedirNumero("Ingrese el número: ");
    let operacion = prompt("Ingresa el operador (+, -, *, /): ");
    let numero2 = pedirNumero("Ingrese el segundo número: ");
    calcular();
}


atenderOperacion();
mostrarResultado();