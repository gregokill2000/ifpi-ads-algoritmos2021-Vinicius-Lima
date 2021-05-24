const prompt = require('prompt-sync')();

console.log('Conversor de Horas para Semanas, Dias e horas');

//Entrada 
const x = Number(prompt('Digite as horas: '));

//Processamento
//Semana
const s = x / 168
const s1 = s.toString();
const s2 = s1.split('.');
const semana = parseInt(s2[0]);

// Dia
const d = x % 168;
const d1 = d / 24;
const d2 = d1.toString();
const d3 = d2.split('.');
const dia = parseInt(d3[0]);

//Hora
const hora = d % 24;
//Saida
console.log('Resultado: ',semana, 'semana(s)', dia, 'dia(s)', 'e', hora, 'hora(s)');