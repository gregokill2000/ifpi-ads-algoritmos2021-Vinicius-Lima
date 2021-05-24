const prompt = require('prompt-sync')();

console.log('Convesor de Minutos para Dias, Horas e Minutos')

// Entrada 
const x = Number(prompt('Digite os minutos: '));

// Processamento
// Dias
const d = x / 1440;
const d1 = d.toString();
const d2 = d1.split('.');
const dia = parseInt(d2[0]);

// Hora
const h = x % 1440;
const h1 = h / 60;
const h2 = h1.toString();
const h3 = h2.split('.');
const hora = parseInt(h3[0]);

// Minutos
const minuto = h % 60;

// Saida
console.log('Resultado é ', dia,'dia(s)', hora, 'hora(s)',minuto, 'minuto(s)');