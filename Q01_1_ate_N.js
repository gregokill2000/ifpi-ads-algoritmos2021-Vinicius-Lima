const usuario = require('prompt-sync')()

function main()
{
    const n = Number(usuario('Digite o N: '));

    for (let i = 1; i <= n; i++) {
        console.log(i)
        
    }
}
main()