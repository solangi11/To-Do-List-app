document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('add-btn');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    addBtn.addEventListener('click', () => {
        addTodo();
    });

    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

    function addTodo() {
        const todoText = todoInput.value.trim();

        if (todoText === '') return;

        const li = document.createElement('li');
        li.className = 'todo-item';

        const span = document.createElement('span');
        span.textContent = todoText;

        const completeBtn = document.createElement('button');
        completeBtn.className = 'complete-btn';
        completeBtn.textContent = 'Complete';
        completeBtn.addEventListener('click', () => completeTodoItem(li));

        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => editTodoItem(li, span));

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deleteTodoItem(li));

        li.appendChild(span);
        li.appendChild(completeBtn);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        todoList.appendChild(li);
        todoInput.value = '';
        todoInput.focus();
    }

    function completeTodoItem(item) {
        item.classList.toggle('completed');
    }

    function deleteTodoItem(item) {
        todoList.removeChild(item);
    }

    function editTodoItem(item, span) {
        const newTodoText = prompt('Edit your task:', span.textContent);

        if (newTodoText !== null && newTodoText.trim() !== '') {
            span.textContent = newTodoText.trim();
        }
    }
});
