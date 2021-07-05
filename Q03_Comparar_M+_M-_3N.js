const usuario = require('prompt-sync')();

function comparação()
{
    console.log('Comparação entre Números (Maior e Menor)');

    // Entrada
    const a = Number(usuario('Digite um número: '));
    const b = Number(usuario('Digite um número: '));
    const c = Number(usuario('Digite um número: '));
    
    // Processamento

    if( a > b && a > c && b > c)  // "a" maior que todos os outros com "c" como menor número
    {
        console.log('O Maior número é:', a); 
        console.log('O Menor número é:', c);
    }

    else if( a > b && a > c && b < c) // "a" maior que todos os outros com "b" como menor número
    {
        console.log('O Maior número é:', a);
        console.log('O Menor número é:', b);
    }

    else if( a < b && a > c && b > c) // "b" maior que todos os outros com "c" como menor número
    {
        console.log('O Maior número é:', b);
        console.log('O Menor número é:', c);
    }

    else if( a < b && a < c && b > c) // "b" maior que todos os outros com "a" como menor número
    {
        console.log('O Maior número é:', b);
        console.log('O Menor número é:', a);
    }

    else if( a < b && b < c && c > a) // "c" maior que todos os outros com "a" como menor número
    {
        console.log('O Maior número é:', c);
        console.log('O Menor número é:', a);
    }

    else if( a > b && c > a && c > b) // "c" maior que todos os outros com "b" como menor número
    {
        console.log('O Maior número é:', c);
        console.log('O Menor número é:', b);
    }

    else if (a == b && b == c) // Números iguais
    {
        console.log('Os números são iguais.');
    }

    else if(a == b && a > c) // Dois númeoros iguais e "c" como menor
    {
        console.log('O Maior número é:', a); 
        console.log('O Menor número é:', c);
    }

    else if( b == c && b > a) // Dois númeoros iguais e "a" como menor
    {
        console.log('O Maior número é:', b); 
        console.log('O Menor número é:', a);
    }

    else if( a == c && c > b) // Dois númeoros iguais e "b" como menor
    {
        console.log('O Maior número é:', c); 
        console.log('O Menor número é:', b);
    }
}

comparação()