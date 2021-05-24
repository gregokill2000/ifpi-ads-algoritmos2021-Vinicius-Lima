const prompt = require('prompt-sync')();

console.log('Comprimento da Circuferência');

// Entrada
const r = Number(prompt('Digite o raio: '));

// Processamento
const c = 2 * Math.PI * r;
const c1 = c.toFixed(2);

// Saida
console.log('O Comprimento é; ', c1);