const usuario = require('prompt-sync')();

function comparação_elementos()
{
    console.log('Comparação  de igualdade entre os elementos que compoem o numero');

    const n = Number(usuario('Digite um número de dois digitos: '));

    const z = Math.trunc(n / 10);
    const y = n % 10
    
    

    if( z == y)
    {
        console.log('Os elementos são iguais')
    }

    else
    {
        console.log('Os elementos são diferentes');
    }
}
comparação_elementos()