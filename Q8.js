const prompt = require('prompt-sync')();

console.log('Soma dividida pela Subtração de dois numeros');

// Entrada de dados.
const A = Number(prompt('Digite o numero A: '));
const B = Number(prompt('Digite o numero B: '));

// Processamento de Dados.
const s0 = A + B;
const s1 = A - B;
const d = s0 / s1;

// Saida dos Dados.
console.log('Resultado: ',d);
