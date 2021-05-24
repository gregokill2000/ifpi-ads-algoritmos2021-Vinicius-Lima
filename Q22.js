const prompt = require('prompt-sync')();

console.log('Conversor Km para m')

//Entrada
const k = Number(prompt('Digite um valor em Km: '));

//Processamento
const m = k * 1000

//Saida
console.log('Equivale em metros: ',m);