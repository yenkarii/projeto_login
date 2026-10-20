const loginSalvo = localStorage.getItem('usuario');
const senhaSalva = localStorage.getItem('senha');

document.querySelector('#rLogin').textContent = loginSalvo;
document.querySelector('#rSenha').textContent = senhaSalva;