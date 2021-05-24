const prompt = require('prompt-sync')();

console.log('Corte de Salário em 30%');

// Entrada de Dados.
const sv = Number(prompt('Digite seu salário atual: '));

// Processamento.
const cs = sv * 0.70;

// Saida.
const sn = cs.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
console.log('Seu novo salário é: ', sn);
