const prompt = require('prompt-sync')()

console.log('A conversão de um Numero binário em decimal:')

//Entrada
const nb = Number(prompt('Escreva o número(4 digitos) em base binária: '))

// Meio da questão
const m1 = nb / 1000;
const r1 = nb % 1000;
const c1 = r1 / 100;
const r2 = r1 % 100;
const de1 = r2 / 10;
const u1 = r2 % 10;

/*Eliminação das casas decimais. 
Necessario pois usando to.Fixed, quando calculava o binario 1111 estava mostrando o numero em octal, não em decimal
e sem o to.fixed e sem o procedimento abaixo dava um numero acima do que realmente é.*/
// m1
const m2 = m1.toString();
const m3 = m2.split('.');
const m = parseInt(m3[0]);
// c1
const c2 = c1.toString();
const c3 = c2.split('.');
const c = parseInt(c3[0]);
// de1
const de2 = de1.toString();
const de3 = de2.split('.');
const d = parseInt(de3[0]);
// u1 
const u2 = u1.toString();
const u3 = u2.split('.');
const u = parseInt(u3[0]);

// Cálculo do número binário nas suas bases
const d1 = Math.pow(2,0) * u;
const d2 = Math.pow(2,1) * d;
const d3 = Math.pow(2,2) * c;
const d4 = Math.pow(2,3) * m;
const dt = d1 + d2 + d3 + d4;

// Valor de saída
console.log('Em decimal é: ', dt, 'decimal(is)')