const usuario = require('prompt-sync')();

function situação()
{
    console.log('Sistuação do Aluno.')
    const nome = usuario(('Digite seu nome: '))
    const nota1 = Number(usuario('Digite a nota da 1ª Avaliação: '));
    const nota2 = Number(usuario('Digite a nota da 2ª Avaliação: '));
    const nota3 = Number(usuario('Digite a nota das Atividades: '));
    
    const peso1 = nota3 * 0.10
    const peso2 = nota1 * 0.20
    const peso3 = nota2 * 0.30
    
    function Média(n1,n2,n3,p1,p2,p3)
    {
        const d = p1 + p2 + p3;
        const n = (n1 * p2) + (n2 * p3) + (n3 * p1);
        const m = n/d
        return m;
    }
    const média = Média(nota1,nota2,nota3,peso1,peso2,peso3);
    
    function prova_final(ms)
    {
        const pf = Number(usuario('Digite a nota da Prova Final: '));
        const mpospf = (ms + pf) / 2;

        if(mpospf >= 6)
        {
            return 'Aprovado pós Prova Final'
        }
        else
        {
            return 'Reprovado pós Prova Final'
        }
    }

    function Situação(mf)
    {
        if(mf < 4)
        {
            return 'Reprovado'
        }
        else if(mf >= 4 && mf < 7)
        {
            console.log('Aluno de Prova final.');
            return prova_final(mf);
        }
        else if( mf >= 7)
        {
            return 'Aprovado'
        }
    }
    function Exibir()
    {
        console.log(nome);
        console.log('A média é: ',média.toFixed(1));
        console.log(Situação(média))
    }  
    
    Exibir()  
}
situação()