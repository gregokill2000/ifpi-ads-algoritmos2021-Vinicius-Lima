const prompt = require('prompt-sync')();

console.log('Ordem Inversa');

// Entrada de Dados
const x = Number(prompt('Digite um número com três digitos: '));

//Processamentos de Dados.

// Calculo para obter o Elemento C.
const c = x / 100;
const c1 = c.toString(); 
const c2 = c1.split('.'); 
const c3 = parseInt(c2[0]); // C

// Calculo para obter o Elemento D.
const d = parseInt(c2[1]);
const d1 = d / 10;
const d2 = d1.toString(); 
const d3 = d2.split(".");
const d4 = parseInt(d3[0]); // D

// Calculo para obter o Elemento U.
const u = parseInt(d3[1]); // U 
const u1 = u / 1; // Calculo para confimar U.

// Saida de Dados.
console.log('Ordem inversa:' ,u1,d4,c3);
