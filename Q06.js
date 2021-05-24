const prompt = require('prompt-sync')();

console.log('Conversor de Velocidade Km/h para m/s');

// Entrada de dados.
const x = Number(prompt('Digite a velocidade em Km/h:'));

//Processamento de Dados.
const y = x / 3.6;

//Saida de Dados.
console.log('A velocidade em m/s é:', y);
