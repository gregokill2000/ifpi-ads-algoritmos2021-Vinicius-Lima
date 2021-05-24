const prompt = require('prompt-sync')();

console.log('Quantidade necessario  de zinco e cobre para fazer  o latão.')

//Entrada 
const l = Number(prompt('Digite a quantidade de latão em Kg a ser  produzida: '));

//Processamento 
const c = l * 0.70; // quantidade de cobre
const z = l * 0.30; // quantidade de zinco.


// Saida
console.log('Quantidade de Cobre é: ',c,'kg');
console.log('Quantidade de Zinco é: ',z,'kg');