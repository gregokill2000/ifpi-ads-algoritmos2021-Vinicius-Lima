const usuario = require('prompt-sync')();

function Acesso()
{
    // Leitura da senha.
    console.log('Digite a senha de acesso de 4 digitos: ');
    const senha_u = usuario('senha: ');

    //senha de autorização
    const senha_a = 1234;

    function permissão_ou_não(x,y)
    {
        if ( x == y )
        {
            return 'Acesso Permitido';
        }
        else
        {
            return 'Acesso Negado'
        }
    }

    console.log(permissão_ou_não(senha_u,senha_a));
}
Acesso()