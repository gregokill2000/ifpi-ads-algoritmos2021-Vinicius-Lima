const usuario = require('prompt-sync')();

// Calcular Idade.
function Idade()
{
    // Dia atual
    console.log('Digite abaixo a data de hoje:');
    const dia = Number(usuario('Digite o dia: '));
    const mês = Number(usuario('Digite o mês: '));
    const ano = Number(usuario('Digite o ano: '));

    // Nascimento
    console.log('\nDigite a data de seu nascimento: ');
    const dia_n = Number(usuario('Digite o dia em que nasceu: '));
    const mês_n = Number(usuario('Digite o meŝ em que nasceu: '));
    const ano_n = Number(usuario('Digite o ano em que nasceu: '));

    function calculo()
    {
       if(mês > mês_n)
       {
        const x = (ano - ano_n);
        const q = mês - mês_n;
        const y = Math.abs(q);
        const w = dia - dia_n;
        const z = Math.abs(w);

        const aa = x * 365;
        const mm = y * 30.4167;
        const dd = aa + mm + z;
        const idade = Math.trunc(dd/365);

        console.log('Você tem: ',idade,'anos');
       }

       else if( mês_n == mês && dia_n <= dia)
       {
           const x = (ano - ano_n);
           const q = mês - mês_n;
           const y = Math.abs(q);
           const w = dia - dia_n;
           const z = Math.abs(w);

           const aa = x * 365;
           const mm = y * 30.4167;
           const dd = aa + mm + z;
           const idade = Math.trunc(dd/365);

          console.log('Você tem: ',idade,'anos');
       }

       else if( mês_n == mês && dia_n > dia)
       {
           const x = (ano - ano_n) -1;
           const q = mês - mês_n;
           const y = Math.abs(q);
           const w = dia - dia_n;
           const z = Math.abs(w);

           const aa = x * 365;
           const mm = y * 30.4167;
           const dd = aa + mm + z;
           const idade = Math.trunc(dd/365);

          console.log('Você tem: ',idade,'anos');
       }

       else 
       {
        const x = (ano - ano_n) -1;
        const q = mês - mês_n;
        const y = Math.abs(q);
        const w = dia - dia_n;
        const z = Math.abs(w);

        const aa = x * 365;
        const mm = y * 30.4167;
        const dd = aa + mm + z;
        const idade = Math.trunc(dd/365);

        console.log('Você tem: ',idade,'anos');
       }
    }
    calculo()

}
Idade()