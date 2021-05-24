const prompt = require('prompt-sync')();

console.log('Conversor m para Km,m');

//Entrada
const m = Number(prompt('Digite o valor em m: '));

//Processamento
const k = m / 1000;
const km = k.toString();
const kmm = km.split('.');

//Saida
console.log('O valor é ', kmm[0],'quilômetros','e',kmm[1],'metros');