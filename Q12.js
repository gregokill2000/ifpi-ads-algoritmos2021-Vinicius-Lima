const prompt = require('prompt-sync')();

console.log('Aumento de Salário em 25%');

// Entradas de Dados
const sv = Number(prompt('Digite seu salário atual: '));

//Processamento de Dados.
const cs = (sv * 0.25) + sv;

//Saidas de Dados.
const sn = cs.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
console.log('Seu novo salário é: ', sn);
