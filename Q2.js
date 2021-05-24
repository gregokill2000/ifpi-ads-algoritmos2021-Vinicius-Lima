const prompt = require('prompt-sync')();
console.log(' Conversor de Hora para Minutos');

// Entrada dos Dados
const H = Number(prompt('Digite a hora AM/PM:'));
const M = Number(prompt('Digite os Minutos:'));

//Processamento dos Dados 
const h = H * 60; // Transforma a hora em minutos
const m = h + M; // Soma a os minutos dados com o resutado da variavél h.

//Saida dos Dados
console.log('A Hora equivale a:', m,'minutos');
