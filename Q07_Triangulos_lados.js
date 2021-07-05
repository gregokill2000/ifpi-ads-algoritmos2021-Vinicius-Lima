const usuario = require('prompt-sync')();

function triângulo()
{
    console.log('Verifique ser os as medidas do lados formam um triângulo')

    const l_a = Number(usuario('Digite o valor de um dos lados do triângulo: '));
    const l_b = Number(usuario('Digite o valor de um dos lados do triângulo: '));
    const l_c = Number(usuario('Digite o valor de um dos lados do triângulo: '));

    if(Sim_ou_Não(l_a,l_b,l_c))
    {
        console.log('Forma um Triângulo');

        const tipo = Tipo_Triângulo(l_a,l_b,l_c);
        console.log(tipo);
    }
    else
    {
        console.log('Não Forma um Triângulo');
    }
    
    function Sim_ou_Não(laf,lbf,lcf)
    {
        if(laf + lbf > lcf && laf + lcf > lbf && lbf + lcf > laf )
        {
            return true;
        }
        else
        {
            return false;
        }
        
    }
    
    function Tipo_Triângulo(la,lb,lc)
    {
        if(la == lb && lb == lc && la == lc)
        {
            return 'Equilatéro';
        }
        else if(la == lb || la == lc || lb == lc)
        {
            return 'Isósceles'
        }
        else
        {
            return 'Escaleno';
        }
    }
}
triângulo()