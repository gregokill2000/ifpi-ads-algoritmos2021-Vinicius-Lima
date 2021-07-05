const usuario = require('prompt-sync')()

function comparação()
{
console.log('Comparação entre Números (igualdade entre si)');

//Entrada
const a = Number(usuario('Digite um número: '));
const b = Number(usuario('Digite um número: '));
const c = Number(usuario('Digite um número: '));

//Processamento
if( a == b && b == c)
{
    console.log('Existem três números iguais');
}
else if( a != b && b == c || a == b && b != c || a == c && b != c)
{
    console.log('Existem Dois números iguais');
}
else if( a !== b && b !== c)
{
    console.log('Não existem números iguais');
}
}
comparação()