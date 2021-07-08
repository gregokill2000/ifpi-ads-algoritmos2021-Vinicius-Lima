const usuario = require('prompt-sync')()

function Main()
{
    const a = Number(usuario('Digite um Número: '));
    const b = Number(usuario('Digite um Número: '));
    
    let num = 1

    while(!( num % a == 0 && num % b == 0))
    {
        num++;
    }
    console.log('MMC: ', num);
}
Main()