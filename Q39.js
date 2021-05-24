const prompt = require('prompt-sync')();

console.log('Calculo da Expressão D =(R+S)/2, onde R =(A+B)² e S =(B+C)² ')

//Entradas
const A = Number(prompt('Digite o valor de A: '));
const B = Number(prompt('Digite o valor de B: '));
const C = Number(prompt('Digite o valor de C: '));

// Processamento
const R = Math.pow((A+B),2);
const S = Math.pow((B+C),2);
const D = (R+S) / 2;

//Saida
console.log('O Resultado é ', D);