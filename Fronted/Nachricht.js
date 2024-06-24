function saveMessage() {
    const message = document.getElementById('message').value;
    const messageDisplay = document.getElementById('message-display');
    const deleteButton = document.getElementById('delete-button');

    if (message.trim() !== '') {
        messageDisplay.textContent = message;
        messageDisplay.style.display = 'block';
        deleteButton.style.display = 'block';
        document.getElementById('message').value = '';
    } else {
        alert('Bitte eine Nachricht eingeben.');
    }
}

function deleteMessage() {
    const messageDisplay = document.getElementById('message-display');
    const deleteButton = document.getElementById('delete-button');

    messageDisplay.textContent = '';
    messageDisplay.style.display = 'none';
    deleteButton.style.display = 'none';
}
