const prompt = require('prompt-sync')();

console.log('Conversor de Segundos pra HH:MM:SS');

// Entrada 
const s = prompt('Digite os segundos: ');

// Processamento
// Hora
const x = parseInt(s / 3600);
const x1 = x.toFixed(0);
const h = parseInt(x1);

// Minutos
const y = s % 3600;
const y1 = y / 60;
const m = y1.toFixed(0);
const m1 = parseInt(m);

// Segundos
const sf = y % 60;

// Saida
console.log('Resultado: ', h,'h',m1,'mm',sf,'s');