
// let edad = 25 //(el número es a modo de ejemplo, podés cambiarlo o
// // crear otras para tener varias pruebas)

// if (edad<0){
//     "Error, edad inválida. Por favor ingrese un número válido.")
// }
// else if (edad < 18) {
//     "No puede pasar al bar.")
// }    
// else if (edad < 21 ){
//     "Puede pasar al bar, pero no puede tomar alcohol")
// }
// else if (edad == 21){
//         "Bienvenido, felicitaciones por alcanzar la mayoría de edad.")
//     }
// else {
//     "Puede pasar al bar y tomar alcohol.")
// }

// if (edad % 2 != 0) {
//         "¿Sabías que tu edad es impar?")
//     }

// Ejercicio 2

// function totalPagar (vehiculo,litrosConsumidos) {
//     let precioAPagar = 0;
//     let 
//     if (vehiculo == "coche"){
//         precioAPagar = 86;
//         return `El precio por litro es ${precioAPagar}`
//     } 
//     else if (vehiculo == "moto"){
//         return 'El precio por litro es 70'
//     } 
//     else if (vehiculo == "autobus"){
//         return 'El precio por litro es 55'
//     } 
//     else if ( 0<litrosConsumidos<=25 && ){
//         let precioMod = precioAPagar + 50;
//         return '`El precio por litro es ${}`'
//     } 

// }

// totalPagar("coche",);


// function totalAPagar(vehiculo, litrosConsumidos) {
//     let precioLitro;
//     if (vehiculo == "coche") {
//       precioLitro = 86;
//     } else if (vehiculo == "moto") {
//       precioLitro = 70;
//     } else if (vehiculo == "autobus") {
//       precioLitro = 55;
//     } 
//     let totalPagar = precioLitro * litrosConsumidos;    
//     if (litrosConsumidos >= 0 && litrosConsumidos <= 25){
//         return totalPagar += 50;
//     } else if (litrosConsumidos >25) {
//         return totalPagar += 50;
//   }
//   }
  
//   console.log(totalAPagar("moto",4));
//   console.log(totalAPagar("autobus",26));


// base
// Pollo = $150 (“pollo”)
// Carne = $200 (“carne”)
// Vegetariano (verduras asadas) = $100 (“veggie”)

// Blanco c/orégano y parmesano = $50 (“blanco”)
// Negro c/avena = $60 (“negro”)
// Sin gluten = $75 (“s/gluten”)

// Queso = $20
// Lechuga = $10
// Cebolla = $15
// Mayonesa = $5
// Mostaza = $5
// Tomate = $15

// T OR F

// const prompt = require("prompt-sync")({ sigint: true});

// function precioQbano (base,pan) {
//     let queso = prompt("¿Quiere Queso? entra true para si o false para no: ");
//     let tomate = prompt("¿Quiere tomate? entra true para si o false para no: ");
//     let lechuga = prompt("¿Quiere lechuga? entra true para si o false para no: ");
//     let cebolla = prompt("¿Quiere cebolla? entra true para si o false para no: ");
//     let mayonesa = prompt("¿Quiere mayonesa? entra true para si o false para no: ");
//     let mostaza= prompt("¿Quiere mostaza? entra true para si o false para no: ");
//     if (base=="pollo"){
//         base = 150;
//     }
//     else if (base=="carne"){
//         base = 200;
//     }
//     else if (base=="veggie"){
//         base = 100;
//     }
//     if (pan == "blanco"){
//         pan = 50
//     }
//     else if (pan == "negro"){
//         pan = 60;
//     }
//     else if (pan == "s/gluten"){
//         pan = 60;
//     }
//     let totalAdiciones=0;
//     if (queso) totalAdiciones+=20; 
//     if (tomate) totalAdiciones+=15; 
//     if (lechuga) totalAdiciones+=10; 
//     if (cebolla) totalAdiciones+=15; 
//     if (mayonesa) totalAdiciones+=5; 
//     if (mostaza) totalAdiciones+=5; 
             
//     let costoTotal = base + pan + totalAdiciones;
//     return console.log(costoTotal)
// }

// precioQbano("pollo","blanco");
// precioQbano("veggie","s/gluten");


function numSecreto (numX) {
    let numR = Math.floor(Math.random()*(10-1)+1);
    numR == numX ? console.log(`Felicitaciones`) : console.log(`Lo siento el numero secreto era: ${numR}`);
} 
numSecreto(8);
numSecreto(2);
numSecreto(1);




