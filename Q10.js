const prompt = require('prompt-sync')();

// Entrada
const valor1 = prompt("Digite o valor 1: ");
const valor2 = prompt("Digite o valor 2: ");

// Processamento
const quociente = parseInt(valor1/valor2);
const resto = valor1 % valor2;

//Saida
console.log("quociente = " + quociente);
console.log("resto = " + resto);