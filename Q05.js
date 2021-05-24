const prompt = require('prompt-sync')();

console.log('Centenas + Dezenas + Unidade');

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

// Somatório dos Elementos C+D+U
const somaCDU = c3 + d4 + u1;

//Saida dos Dados.
console.log('A soma de seus elementos C+D+U é: ',somaCDU);
