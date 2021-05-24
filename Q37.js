const prompt = require('prompt-sync')();

console.log('Quantos anos, meses e dias você viveu? ');

// Entrada 
const d = Number(prompt('Digite quantos dias você já viveu: '));

//Processamento
//ano
const a = d / 365;
const a1 = a.toString();
const a2 = a1.split('.');
const ano = parseInt(a2[0]);

//mes
const m = d % 365;
const m1 = m / 30;
const m2 = m1.toString();
const m3 = m2.split('.');
const mes = parseInt(m3[0]);

// dia
const dia  = m % 30;

// Saida
console.log('Você tem:', ano, 'ano(s)', mes, 'mês(es)',dia,'dia(s)');
