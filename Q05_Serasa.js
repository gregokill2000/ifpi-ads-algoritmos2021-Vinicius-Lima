const usuario = require('prompt-sync')();

function Serasa()
{
    console.log('Cadrastro Possitivo');
    console.log('Digite abaixo os numeros entre 0 e 100 para os critérios do calculodo Score.')
    const a = Number(usuario('Digite para o 1º critério: '));
    const b = Number(usuario('Digite para o 2º critério: '));
    const c = Number(usuario('Digite para o 3º critério: '));

    function valor_score_01(x,y,z)
    {
        const s = x / 100;
        const r = y / 100;
        const p = z / 100;

        const critérioA_s1 = 260 * s;
        const critérioB_s1 = 570 * r;
        const critérioC_s1 = 170 * p;

        const score01 = critérioA_s1 + critérioB_s1 + critérioC_s1;
        return score01;
    }

    function valor_score_02(x,y,z)
    {
        const q = x / 100;
        const w = y / 100;
        const e = z / 100;

        const critérioA_s2 = 620 * q;
        const critérioB_s2 = 190 * w;
        const critérioC_s2 = 190 * e;

        const score02 = critérioA_s2 + critérioB_s2 +critérioC_s2;
        return score02;
    }

    function classificação_s01(s_01)
    {
        if(s_01 >= 800 && s_01 <= 1000)
        {
            return 'Muito Bom';
        }
        else if( s_01 >= 600 && s_01 < 800)
        {
            return 'Bom';
        }
        else if(s_01 >= 400 && s_01 < 600)
        {
            return 'Regular';
        }
        else(s_01 >= 0 && s_01 < 400)
        {
            return 'Baixo';
        }
    }
    
    function classificação_s02(s_02)
    {
        if(s_02 >= 701 && s_02 <= 1000)
        {
            return 'Muito Bom';
        }
        else if( s_02 >= 501 && s_02 <= 700)
        {
            return 'Bom';
        }
        else if(s_02 >= 301 && s_02 <= 500)
        {
            return 'Regular';
        }
        else(s_02 >= 0 && s_02 <= 300)
        {
            return 'Baixo';
        }
    }
    function Exibir()
    {
        
        const vs1 = valor_score_01(a,b,c);
        const vs2 = valor_score_02(a,b,c);

        const cs1 = classificação_s01(vs1);
        const cs2 = classificação_s02(vs2);

        console.log('\nScore 1.0: ',vs1);
        console.log('Seu score 1.0 está: ',cs1);

        console.log('\nScore 2.0: ',vs2);
        console.log('Seu score 2.0 está: ',cs2);
    }

    Exibir()
}
Serasa()