const prompt = require('prompt-sync')();
console.log('Convesor de Dias para Semanas e Dias');

//Entrada de Dados.
const m = Number(prompt('Digite os Dias: '));

// Processamento de Dados.
// semana.
const x = m / 7; 
const s = x.toString();  
const s1 = s.split('.'); 
const H = parseInt(s1[0]); 
// Dias.
const M = s1[1] * 0.000000000000007; 
const M1 = M.toFixed(0); 

// Saida dos Dados.
console.log('Resultado:',H,'semanas','e',M1 , "dias");
