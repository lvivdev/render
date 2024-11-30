document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                localStorage.setItem('isLoggedIn', 'true');
                alert('Вхід успішний!');
                window.location.href = 'about.html'; // Redirect after login
            } else {
                alert('Невірний логін або пароль!');
            }
        });
});
