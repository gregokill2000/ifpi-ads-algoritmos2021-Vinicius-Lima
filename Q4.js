const prompt = require('prompt-sync')();
console.log(' Conversor de Moedas USD ($) para BRL (R$)');

// Entrada do dados.
const ct = Number(prompt('Insira a cotação do Dólar Hoje: '));
const d  = Number(prompt('Insira o valor em Dólar a ser convertido: '));

//Processamento dos dados.
const r = ct * d; // Conversão
const t = r.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}); // converte r em variavél do tipo String para ser mostrada em formato de moeda, no caso o Real.

// Saida de Dados
console.log(t);
