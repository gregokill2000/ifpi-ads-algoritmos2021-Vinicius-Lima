const usuario = require('prompt-sync')();

function triangulo()
{
    console.log('Forma um triângulo?')

    const alpha = Number(usuario('Digite um dos angulos internos do triângulos: '));
    const beta = Number(usuario('Digite um dos angulos internos do triângulos: '));
    const gama = Number(usuario('Digite um dos angulos internos do triângulos: '));


    const soma = alpha + beta + gama;

   function Triângulo_Sim_ou_Não()
   {
     if (soma == 180)
     {
         console.log('Forma Triângulo');
     }
     else
     {
         console.log('Os ângulos informados não formam um triângulo.');
     }
   } 

   Triângulo_Sim_ou_Não()


   function Triângulo_Classificação()
    {
        if(soma == 180 && alpha < 90 && beta < 90 && gama < 90)
        {
            console.log('O Triângulo formado é um Triângulo Acutângulo.');
        } 
        else if(soma == 180 && alpha == 90 || beta == 90 || gama == 90 && alpha != 0 && beta != 0 && gama != 0)
        {
            console.log('O Triângulo formado é um Triângulo Retângulo.');
        }
        else if(soma == 180 && alpha > 90 || beta > 90 || gama > 90 && alpha != 0 && beta != 0 && gama != 0)
        {
            console.log('O Triângulo formado é um Triângulo Obtusângulo.');
        }
        else
        {
            console.log('Não há como Classificar');
        }
    }

    Triângulo_Classificação()
}
triangulo()