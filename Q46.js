const prompt = require('prompt-sync')()

console.log('Valor da entrada mais 2 prestações iguais de uma Mercadodia.');
console.log('Considere a entrada maior ou igual a duas últimas, sendo as mais inteiras possíveis.');

// Entrada
const valor_mercadoria = Number(prompt('Digite aqui o valor: '));

// Processamento
const entrada = ((valor_mercadoria / 3) + (valor_mercadoria % 3))
const entrada1 = entrada.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

const parcelas = ((valor_mercadoria - entrada) / 2)
const parcelas1 = parcelas.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

// Saida
console.log('O valor da entrada é: ', entrada1);
console.log('O valor da prestações é: ', parcelas1);
