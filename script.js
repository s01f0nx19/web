document.getElementById('login-btn').addEventListener('click', login);

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "admin" && password === "1234567890") {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('game-section').style.display = 'block';
    } else {
        document.getElementById('login-error').textContent = 'Usuario o contraseña incorrectos';
    }
}

function play(userChoice) {
    const choices = ['piedra', 'papel', 'tijeras'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';

    if (userChoice === computerChoice) {
        result = '¡Empate!';
    } else if (
        (userChoice === 'piedra' && computerChoice === 'tijeras') ||
        (userChoice === 'papel' && computerChoice === 'piedra') ||
        (userChoice === 'tijeras' && computerChoice === 'papel')
    ) {
        result = '¡Ganaste!';
    } else {
        result = '¡Perdiste!';
    }

    document.getElementById('result').innerHTML = `Tu elección: ${userChoice} <br> Elección de la computadora: ${computerChoice} <br> ${result}`;
    document.getElementById('play-again-btn').style.display = 'block';
    document.getElementById('logout-btn').style.display = 'block';
}

function playAgain() {
    document.getElementById('result').innerHTML = '';
    document.getElementById('play-again-btn').style.display = 'none';
}

function logout() {
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('game-section').style.display = 'none';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('login-error').textContent = '';
}
