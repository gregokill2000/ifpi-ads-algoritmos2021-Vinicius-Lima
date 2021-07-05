const usuario = require('prompt-sync')();

function ordem_crescente()
{
    console.log('Ordem Crescente');

    const a = Number(usuario('Digite um número: '));
    const b = Number(usuario('Digite um número: '));
    const c = Number(usuario('Digite um número: '));

    if( a > b && a > c && b > c)  
    {
        console.log(a,b,c);
    }

    else if( a > b && a > c && b < c) 
    {
        console.log(a,c,b);
    }

    else if( a < b && a > c && b > c)
    {
        console.log(b,a,c);
    }

    else if( a < b && a < c && b > c) 
    {
        console.log(b,c,a);
    }

    else if( a < b && b < c && c > a) 
    {
        console.log(c,b,a);
    }

    else if( a > b && c > a && c > b)
    {
        console.log(c,a,b);
    }

    else if (a == b && b == c)
    {
        console.log(a,b,c);
    }

    else if(a == b && a > c)
    {
        console.log(a,b,c);
    }

    else if( b == c && b > a)
    {
        console.log(b,c,a); 
    }

    else if( a == c && c > b)
    {
        console.log(a,c,b); 
    }


}

ordem_crescente()