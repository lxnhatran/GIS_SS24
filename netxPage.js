// Function to delete question and answer
function deleteQA(qaObject) {
    let qaList = JSON.parse(localStorage.getItem('qaList')) || [];
    // Find index of the qaObject
    const index = qaList.findIndex(item => item.question === qaObject.question && item.answer === qaObject.answer);
    if (index !== -1) {
        // Remove item from the list
        qaList.splice(index, 1);
        // Update localStorage
        localStorage.setItem('qaList', JSON.stringify(qaList));
        // Reload the table
        reloadTable();
    }
}

// Function to reload the table with stored questions and answers
function reloadTable() {
    const tableBody = document.querySelector('#qa-table tbody');
    tableBody.innerHTML = '';
    let qaList = JSON.parse(localStorage.getItem('qaList')) || [];
    qaList.forEach(function(qaObject) {
        const newRow = tableBody.insertRow();
        const questionCell = newRow.insertCell(0);
        const answerCell = newRow.insertCell(1);
        const actionsCell = newRow.insertCell(2);
        questionCell.textContent = qaObject.question;
        answerCell.textContent = qaObject.answer;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Text löschen';
        deleteButton.addEventListener('click', function() {
            deleteQA(qaObject);
        });
        actionsCell.appendChild(deleteButton);
    });
}

// Function to load stored questions and answers on page load
window.onload = function() {
    reloadTable();
};
