const prompt = require('prompt-sync')();

console.log('Gasto aproximado de um fumante durante a vida.');

//Entrada
const a = Number(prompt('Digite por quantos anos é fumante: '));
const b = Number(prompt('Quantos cigarros fuma por dia? '));
const c = Number(prompt('Digite o preço Médio da carteira de Cigarro: '));

// Processamento
const ano = a * 365;
const ciu = ano * b;
const cp = c / 20;
const r = ciu * cp;
const t = r.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

// Saida
console.log('Foi gasto aproximadamente ',t);