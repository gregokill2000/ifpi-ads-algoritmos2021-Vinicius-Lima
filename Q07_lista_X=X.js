const usuario = require('prompt-sync')({
    sigint: true
})

function Main()
{
    let num = Number(usuario('Digite um número: '))

    let ant = num
    let atl = Number(usuario('Digite um número: '))
    let c = ant / atl

    while(ant / atl != 1)
    {
        let numX = Number(usuario('Digite um número: '))

        ant = num
        atl = numX
        c = ant / atl

    }
}
Main()