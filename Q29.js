const prompt = require('prompt-sync')();

console.log('Conversor Mês para Anos e Mês');

//Entrada 
const x = Number(prompt('Digite a quantidade de Meses: '));

//Processamento

const a = x / 12;
const a1 = a.toString();
const a2 = a1.split('.');
const ano = parseInt(a2[0]);

//Mes
const mes = x % 12;

// Saida
console.log('Resultado é',ano, 'ano(s)',mes, 'mês(es)');