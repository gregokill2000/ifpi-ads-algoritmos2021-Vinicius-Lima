const prompt = require('prompt-sync')();

console.log('Volume de uma Esfera');

// Entrada
const r = Number(prompt('Digite o raio: '));

// Processamento
const a = Math.PI;
const a1 = a.toFixed(2);
const v = (4 * a1 * Math.pow(r,3) / 3);
const v1 = v.toFixed(2);

// Saida
console.log('O Comprimento é; ', v1);