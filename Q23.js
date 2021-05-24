const prompt = require('prompt-sync')();

console.log('Conversor Kg para g')

//Entrada
const kg = Number(prompt('Digite um valor em Kg: '));

//Processamento
const g = kg * 1000

//Saida
console.log('Equivale em gramas: ',g);