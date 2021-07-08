const usuario = require('prompt-sync')();

function Main()
{
    const num = Number(usuario('Digite um número: '));
    
    let divisao = num / 2;

    while(divisao > 1)
    {
        divisao = divisao / 2
    }
    console.log(divisao);
    
}
Main()