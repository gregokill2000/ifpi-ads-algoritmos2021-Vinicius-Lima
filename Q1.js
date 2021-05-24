const prompt = require('prompt-sync')();
console.log('Conversor de Velocidade m/s para Km/h')

// Entrada dos Dados
const x = Number(prompt('Digite a velocidade em m/s:'));

// Processamento dos Dados
const y = x * 3.6; // Fomula da conversão de velocidade de m/s para Km/h

// Saida dos Dados
console.log('A velocidade em Km/h é:', y);
