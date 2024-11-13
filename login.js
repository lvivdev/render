<script>
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Пример отправки данных через fetch
        fetch('https://your-backend-api.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Вы успешно вошли!');
            } else {
                alert('Ошибка входа!');
            }
        })
        .catch(error => console.error('Ошибка:', error));
    });
</script>
