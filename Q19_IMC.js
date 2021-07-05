const usuario = require('prompt-sync')();

function IMC()
{
    console.log('Indice de Massa Corporal - IMC');
    //Dados do Usuário
    const altura = Number(usuario('Digite sua Altura: '));
    const peso = Number(usuario('Digite seu peso: '));

    //calculo
    const imc = peso / Math.pow(altura,2);

    function Avaliação_do_IMC(i)
    {
        if( i < 25)
        {
            return 'Normal'
        }

        else if( i >= 25 && i <= 30)
        {
            return ' Obeso'
        }
        else if( i > 30)
        {
            return ' Obesidade Mórbida'
        }
    }
    function Resultado()
    {
        console.log('Seu IMC é ',imc.toFixed(2));
        console.log('Seu IMC é considerado: ',Avaliação_do_IMC(imc));
    }
    Resultado();
}
IMC();