const usuario = require('prompt-sync')();

function comparação()
{
    console.log('Comparação entre Números (Maior e Menor)');

    // Entrada
    const a = Number(usuario('Digite um número: '));
    const b = Number(usuario('Digite um número: '));
    
    // Processamento
    if( a > b) 
    {
        console.log('O Maior número é:', a);
        console.log('O Menor número é:', b);
    }
    else if( a < b)
    {
        console.log('O Maior número é:', b);
        console.log('O Menor número é:', a);
    }
    else if (a == b)
    {
        console.log('Os números são iguais.');
    }
}

comparação()