const usuario = require('prompt-sync')();

function Par_ou_Impar()
{
    //leitura do numero
    const numero = Number(usuario('Digite o número: '));

    function Avaliação(n)
    {
        if (n % 2 == 0)
        {
            console.log('O número é Par');
        }
        else
        {
            console.log('O número é Impar');
        }
    }

    Avaliação(numero)
}
Par_ou_Impar()