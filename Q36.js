const prompt = require('prompt-sync')();

console.log('Quantos dias você viveu?')

// Entrada 
console.log('\nDigite Quantos anos, meses e dias você tem')
const ano = Number(prompt('Anos: '));
const mes = Number(prompt('Meses: '));
const dia = Number(prompt('Dias: '));

// Processamento
// Ano para Dia
const a = ano * 365;

// Mês para Dia
const b = mes * 30;

// Soma
const r = a + b + dia;

// Saida
console.log('Você viveu ', r, 'dias');