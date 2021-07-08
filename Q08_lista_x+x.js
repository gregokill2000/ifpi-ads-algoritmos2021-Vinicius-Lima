const usuario = require('prompt-sync')();

function Main()
{
    const numX = Number(usuario('Digite um número: '));

    let ant = numX;
    let atl = Number(usuario('Digite um número: '));
    let soma = ant + atl;

    while(soma != numX)
    {
        let y  = Number(usuario('Digite um número: '));

        ant = atl
        atl = y
        soma = ant + atl;
    }
}
Main()