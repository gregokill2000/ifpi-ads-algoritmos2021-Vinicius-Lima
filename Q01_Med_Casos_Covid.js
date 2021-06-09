const usuario = require('prompt-sync')();

// Média de Casos Covid-19

function Média_Casos_Covid_19()
{
    //Introdução
    console.log('Variação da média de casos de Covid-19');

    //Entrada
    const media_hoje = Number(usuario('Digite a média de casos hoje: '))
    const média_há_14_dias = Number(usuario('Digite a média de 14 dias atrás: '));

    //Processamento dos dados
    function Variação(mh,m14)
    {
        const i = mh - m14;
        const m = (i * 100) / m14;
        const f = m.toFixed(2);

        return f;
    }
    const variação = Variação(media_hoje,média_há_14_dias);
    
    function Controle_da_média(variação)
    {
        if(variação < (-15))
        {
           console.log('Houve uma variação de: ',Math.abs(variação),'%')
           console.log('A média de casos está em "Baixa'); 
        }
        else if(variação >= (-15) && variação <= 15)
        {
           console.log('Houve uma variação de: ',Math.abs(variação),'%')
           console.log('A média de casos está em Estabilidade'); 
        }
        else
        {
           console.log('Houve uma variação de: ',Math.abs(variação),'%')
           console.log('A média de casos está em Alta'); 
        }
    }
    
    //Saida
    Controle_da_média(variação);
    
}
Média_Casos_Covid_19()