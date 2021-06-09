const usuario =require('prompt-sync')();
/* Para não deixar o código abaixo muito grande preferir chamar as 
funções que realizam cálculo de maneira direta sem criar uma "const" para isso. Em relação as linhas de
instruções de "console.log()" na função exibir, elas estão longas pelo motivo já citado aqui e também
porque converto os valores para serem mostrado em Reais. */

function Total_da_tarifa()
{
    console.log('Tarifa de Energia');
    const anterior = Number(usuario('Digite a leitura anterior: '));
    const atual = Number(usuario('Digite a leitura atual: '));
    

    function consumo(a,p)
    {
        const c = a - p;
        return c;
    }
    function tarifa(t)
    {
        if (t < 30)
        {
            return 0;
        }
        else if(t > 30 && t < 100)
        {
            const t1 = t * 0.59
            return t1
        }
        else(t > 100)
        {
            const t2 = t * 0.75
            return t2
        }
    }

    function ICMS(ic)
    {
        const icms = ic * 0.25;
        return icms;
    }
    function PiS_CONFINS(pc)
    {
        const pis = pc * 0.15;
        return pis;
    }
    function ilu_publica(ic)
    {
        if(ic > 80)
        {
            const i = tarifa(consumo(atual,anterior)) * 0.06;
            return i;
        }
        else
        {
            return 0;
        }
    }
    function bandeira(g)
    {
        if(g > 100)
        {
            const bandeira = 8;
            return bandeira;
        }
        else
        {
            return 0;
        }
    }
    
    function total()
    {
        const total = tarifa(consumo(atual,anterior)) + ICMS(tarifa(consumo(atual,anterior))) + PiS_CONFINS(tarifa(consumo(atual,anterior))) + ilu_publica(consumo(atual,anterior)) + bandeira(consumo(atual,anterior));
        return total;
    }

    function Exibir()
    {
        console.log('\nConsumido: ',consumo(atual,anterior),'KW/h');
        console.log('Valor em R$ consumido: ',tarifa(consumo(atual,anterior)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        console.log('ICMS: ',ICMS(tarifa(consumo(atual,anterior))).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        console.log('PIS/COFINS: ',PiS_CONFINS(tarifa(consumo(atual,anterior))).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        console.log('Contribuição Ilu.Publica: ',ilu_publica(consumo(atual,anterior)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        console.log('Valor da Bandeira: ',bandeira(consumo(atual,anterior)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        console.log('O valor da conta é: ',total().toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
    }

    Exibir()
}  
Total_da_tarifa()  