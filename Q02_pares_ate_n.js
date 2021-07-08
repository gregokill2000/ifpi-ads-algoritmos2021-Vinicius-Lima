const usuario = require('prompt-sync')()

function main()
{
    const n = Number(usuario('Digite o N: '));

    for (let i = 1; i <= n; i++) {

        let par = 1 + i++;

       if(par <= n) {

        console.log(par)
       }
       else{
           console.log('Fim')
       }
        
    }
}
main()