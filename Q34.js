const prompt = require('prompt-sync')();

console.log('Média do Numeros');

// Entrada
const a = Number(prompt('Digite um numero: '));
const b = Number(prompt('Digite um numero: '));
const c = Number(prompt('Digite um numero: '));

// Processamento
const s = a + b + c;
const m = s / 2;

// saida 
console.log('O resultado é ', m);