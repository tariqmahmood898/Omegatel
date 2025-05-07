document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const telegramId = document.getElementById('telegramId').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const userData = { name, telegramId, email };

        saveUserData(userData);
        sendTelegramMessage(telegramId, name, email, message);
    });
});

function saveUserData(userData) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
}

function sendTelegramMessage(telegramId, name, email, message) {
    const token = '7508023728:AAGTacImkOpkoydZ6IbV-G0Wme3V0aw9RZs'; // This is a public token, don't use it in production
    const chatId = 6828149131;
    
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const data = {
        chat_id: chatId,
        text: `🔔 Message from website 🌐:\n👨‍🦱 Name: ${name}\n💎 Telegram: ${telegramId}\n📧Email: ${email}\n📨Message: ${message}`
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Message sent:', data);
        alert('Message sent successfully team will reply to you!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error sending message.');
    });
}
