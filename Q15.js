const prompt = require('prompt-sync')();

console.log("Área do Triângulo.", 'Em unidade de medida (u)');

// Entrada
const h = Number(prompt('Digite a Altura do Triângulo: '));
const b = Number(prompt('Digite a base do Triângulo: '));

// Processamento
const a = ( b * h ) / 2;

// Saida
console.log('A área do Triângulo é:',a,'u');
