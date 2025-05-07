document.addEventListener('DOMContentLoaded', function() {
    loadUserData();
});

function loadUserData() {
    const userTable = document.getElementById('userTable');
    if (userTable) {
        const users = JSON.parse(localStorage.getItem('users')) || [];

        users.forEach(userData => {
            const newRow = userTable.insertRow();
            
            const nameCell = newRow.insertCell(0);
            const telegramIdCell = newRow.insertCell(1);
            const emailCell = newRow.insertCell(2);

            nameCell.textContent = userData.name;
            telegramIdCell.textContent = userData.telegramId;
            emailCell.textContent = userData.email;
        });
    }
}
