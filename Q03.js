const prompt = require('prompt-sync')();
console.log('Convesor de Minutos para Hora:Minutos');

//Entrada de Dados.
const m = Number(prompt('Digite os minutos: '));

// Processamento de Dados.
// Hora.
const x = m / 60; // Divide os Minutos por 60 para obter a hora. 
const s = x.toString();  // Transforma a variavél x que é do tipo Number em String.
const s1 = s.split('.'); // Separa o s em duas parte, a parte inteira e a decimal.
const H = parseInt(s1[0]); // H é atribuido a parte inteira de s1 que equilave a hora.
// Minutos.
const M = s1[1] * 0.000000000000060; // Calculo para converter a parte decimal de s1 em minutos.
const M1 = M.toFixed(0); // Elimina as casas decimais do resultado de M.

// Saida dos Dados.
console.log('A hora é:',H,'h',':',M1 , "mm");
