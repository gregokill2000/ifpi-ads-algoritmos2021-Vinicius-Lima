const prompt = require('prompt-sync')();


// Entrada de Dados
const A = Number (prompt('Digite o numero A: '));
const B = Number(prompt('Digite o numero B: '));
const C = Number(prompt('Digite o numero C: '));

// Processamento de Dados.
const mais = A + B;
const menos = B - C;

//Saida de Dados.
console.log('A + B:', mais);
console.log('B - C:', menos);
