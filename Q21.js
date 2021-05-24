const prompt = require("prompt-sync")();

console.log("Conversor de Temperatura ºF para ºC");

// Entrada 
const f = Number(prompt('Digite a Temperatura em ºF: '));

//Processamento
const c = (5 * f - 160) / 9

// Saida
console.log('A temperatura em ºC é:',c);