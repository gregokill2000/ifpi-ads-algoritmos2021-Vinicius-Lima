const usuario = require('prompt-sync')()

function main()
{
    const n1 = Number(usuario('Digite 1º número: '));
    const n2 = Number(usuario('Digite 2º número: '));
    const n3 = Number(usuario('Digite 3º número: '));
    const opçao = Number(usuario('Digite 1 ou 2 ou 3: '));
    
    if(opçao == 1)
    {
        console.log(n1);
    }
    else if(opçao == 2)
    {
        console.log(n2)
    }
    else if(opçao == 3)
    {
        console.log(n3)
    }
    else
    {
        console.log('Opção Invalida')
    }
}
main()