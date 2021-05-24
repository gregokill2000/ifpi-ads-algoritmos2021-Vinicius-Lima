const prompt = require('prompt-sync')();

console.log('Conversor m para cm')

//Entrada
const m = Number(prompt('Digite um valor em m: '));

//Processamento
const cm = m * 100

//Saida
console.log('Equivale em cm: ',cm);