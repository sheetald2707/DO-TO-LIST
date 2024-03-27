function addTask() {
    const inputBox = document.getElementById('input-box');
    const taskList = document.getElementById('task-list');

    if (inputBox.value.trim() !== '') {
        const taskText = inputBox.value.trim();

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        `;

        taskList.appendChild(li);
        inputBox.value = ''; 
    } else {
        alert('Please enter a task!');
    }
}

function deleteTask(btn) {
    const li = btn.parentElement;
    li.remove();
}
