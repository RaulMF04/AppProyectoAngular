document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Usuario y contraseña válidos
        const validUsername = 'raulmorales';
        const validPassword = '1234';

        // Verifica las credenciales
        if (username === validUsername && password === validPassword) {
            alert('Ingreso Exitoso!!!');
            window.location.href = 'home.html';
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    });
});
