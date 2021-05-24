const prompt = require('prompt-sync')();

console.log('Média Ponderada: ');

// Entrada

// 1ª nota
const a = Number(prompt('Digite sua 1ª nota: '));
const aa = Number(prompt('Digite o peso da 1ª nota:'));

// 2ª nota
const b = Number(prompt('Digite sua 2ª nota: '));
const bb = Number(prompt('Digite o peso da 2ª nota:'));

// 3ª nota
const c = Number(prompt('Digite sua 3ª nota: '));
const cc = Number(prompt('Digite o peso da 3ª nota:'));

// Processamento
const A = a * aa;
const B = b * bb;
const C = c * cc;
const D = aa + bb + cc;
const E = (A + B + C) / D;
const E1 = E.toFixed(1);

//Saida
console.log('A Média é: ', E1);
