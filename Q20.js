const prompt = require("prompt-sync")();

console.log("Conversor de Temperatura ºC para ºF");

// Entrada 
const c = Number(prompt('Digite a Temperatura em ºC: '));

//Processamento
const f = (9 * c + 160) / 5

// Saida
console.log('A temperatura em ºF é:',f);