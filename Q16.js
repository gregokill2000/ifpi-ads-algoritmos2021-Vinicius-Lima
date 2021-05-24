const prompt = require('prompt-sync')();

console.log('Área do Quadrado.', 'Em unidade de mediada.');

//Entrada
const l = Number(prompt('Digite a medida do lado: ')); 

// Processamento
const a = Math.pow(l,2);

// Saida
console.log('A área de quadrado é: ', a );
