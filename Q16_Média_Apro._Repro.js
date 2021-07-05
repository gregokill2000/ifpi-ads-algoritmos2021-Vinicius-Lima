const usuario = require('prompt-sync')();

function Aprovado_ou_Reprovado()
{
    //Notas
    console.log('Digite suas notas Abaixo.');
    const nota_1 = Number(usuario('Nota 1: '));
    const nota_2 = Number(usuario('Nota 2: '));

    // média
    const media = (nota_1 + nota_2) / 2;
    

    function Avaliar_Situação(x)
    {
        if (x >= 7)
        {
            return 'Aprovado';
        }
        else if( x < 7)
        {
            console.log('Digite A nota da Prova final abaixo.');
            return Prova_final(x);
        }
    }

    function Prova_final(y)
    {
        const prova_f = Number(usuario('Prova_Final: '));
        const media_final = (prova_f + y) / 2;

        if( media_final >= 5)
        {
            return 'Aprovado';
        }
        else if (media_final < 5)
        {
            return 'Reprovado';
        }
    }

    // Resultado
    console.log(Avaliar_Situação(media));
}
Aprovado_ou_Reprovado();