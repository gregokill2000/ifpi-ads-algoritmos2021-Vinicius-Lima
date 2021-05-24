const prompt = require('prompt-sync')();

console.log('Soma dos Elementos que compõem o número');

// Entrada de Dados
const x = Number(prompt('Digite um número com quatro digitos: '));

//Processamentos de Dados.

// Calculo para obter o Elemento M.
const m = x / 1000;
const m1 = m.toString(); 
const m2 = m1.split('.'); 
const m3 = parseInt(m2[0]); // M

// Calculo para obter o Elemento C.
const c = parseInt(m2[1]);
const c1 = c / 100;
const c2 = c1.toString(); 
const c3 = c2.split(".");
const c4 = parseInt(c3[0]); // C

// Calculo para obter o Elemento D.
const d = parseInt(c3[1]); 
const d1 = d / 10;
const d2 = d1.toString();
const d3 = d2.split('.');
const d4 = parseInt(d3[0]); // D

//Calculo para Elemento U
const u = parseInt(d3[1]);
const u1 = u / 1; // U

// Soma
const s = m3 + c4 + d4 + u1;

// Saida de Dados.
console.log('O resultado é' , s);