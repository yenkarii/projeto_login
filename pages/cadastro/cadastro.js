const formulario = document.querySelector('#formCadastro');

const resposta = document.querySelector('#resp');

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    const login = document.querySelector('#txtLogin').value;
    const senha = document.querySelector('#inserirSenha').value;
    const confirmarSenha = document.querySelector('#confirmarSenha').value;

    if(senha === confirmarSenha)
    {
        localStorage.setItem('usuario', login);
        localStorage.setItem('senha', senha);
        resposta.textContent = "Cadastrado com sucesso! |" + login + " " + senha;
        
        window.location.href="../login/login.html"
    } else{
        resposta.textContent = "Erro! Senhas não coincidentes!";
    }

    
});

/*
    1- fazer a senha
    2- crie variáveis locals e insira usuário e senha
    3- faça uma validação de usuario e senha
    se for igual então aparece a msg usuario e senha válidos
    se for diferente aparece a msg usuario e senha inválido
*/