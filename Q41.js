const prompt = require('prompt-sync')();

console.log('Preço de um carro 0 Km ')

//Entrada 
const i = Number(prompt('Digite o Custo de Fábrica: '));

//Processamento 
const d = i * 0.28; // taxa de distribuição aplicada sobre o valor de fábrica.
const t = i * 0.45; // impostos, aplicado sobre o valor de fábrica.
const c = i + d + t; // Somatório para acha o preço final do carro.
const cf = c.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

// Saida
console.log('Preço para consumidor final é: ',cf);