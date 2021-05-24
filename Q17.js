const prompt = require('prompt-sync')();

console.log('Área do Retângulo');

// Entrada
const h = Number(prompt('Digite a altura do retângulo: '));
const b = Number(prompt('Digite a base do Retângulo: '));

// Processamento
const a = h * b;

// Saida
console.log('A área é: ',a);