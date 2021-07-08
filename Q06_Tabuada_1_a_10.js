const usuario = require('prompt-sync')({
    sigint: true
})

function main()
{
    for (let num = 1; num <=10; num++) {
        for (let i = 1; i <= 10; i++) {
            let multi = num * i;
            console.log(`${num}X${i}=${multi}`)
        }
    }
}
main()