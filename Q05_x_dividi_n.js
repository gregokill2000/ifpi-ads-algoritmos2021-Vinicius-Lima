const usuario = require('prompt-sync')();

function Main()
{
    let x = Number(usuario('Digite um número: '));
    let n = Number(usuario('Digite um número: '));

    while(n > 2)
    {
        let z = x / n;
        console.log(z)

        x = x/n 
        n = n -1 
    }
}
Main()