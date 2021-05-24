const prompt = require('prompt-sync')();

console.log('A Distancia de dois pontos: ')

//Entrada
const x = Number(prompt('X: '));
const x1 = Number(prompt('X1: '));
const y = Number(prompt('y: '));
const y1 = Number(prompt('y1: '));

//Processamento
const s = Math.pow((x1-x),2) + Math.pow((y1-y),2)
const d = Math.sqrt(s)

//Saida
console.log("A Distancia é: ",d);