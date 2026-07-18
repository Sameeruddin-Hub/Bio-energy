const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task");
const todosList = document.getElementById("todos-list");
const itemsLeft = document.getElementById("items-left");
const clearCompletedBtn = document.getElementById("clear-completed");
const emptyState = document.querySelector(".empty-state");
const dateElement = document.getElementById("date");
const filters = document.querySelectorAll(".filter");


let todos = []
let currentFilter = 'all';

taskInput.addEventListener('keydown', (e) => {
    console.log(e.key)
    if (e.key === "Enter") addTodo(taskInput.value);
})
addTaskBtn.addEventListener('click', () => {
    addTodo(taskInput.value)
})

function addTodo(text) {
    if (text.trim() === "") {
        return alert("Enter the valid Text!")
    }

    todos.push({
        id: Date.now(),
        text,
        completed: false,
    })
    saveToLocal();
    updateItems();
    renderTodos();

    taskInput.value = ''
}

function saveToLocal() {

    localStorage.setItem('todos', (JSON.stringify(todos)))

}
function updateItems() {
    let leftTodos = filteredTodos();
    itemsLeft.textContent = `${leftTodos.length} item${leftTodos.length === 1 ? '' : 's'} left`;

}
function getTodosLocal() {
    return JSON.parse(localStorage.getItem('todos'))
}
function renderTodos() {
    let currentTodos = getTodosLocal();

    let html = '';

    currentTodos.forEach((todo) => {
        html += `
            <li class="todo-item ${todo.completed ? "completed" : ''}">
                    <label class="checkbox-container">
                        <input type="checkbox" onclick='completedTodo(${todo.id})' ${todo.completed ? "Checked" : ''} class="todo-checkbox">
                        <span class="checkmark"></span>
                    </label>
                    <span class="todo-item-text">${todo.text}</span>
                    <button class="delete-btn">
                        <i class="fi fi-rr-trash"></i>
                    </button>

                </li>
        
        `

    })
    todosList.innerHTML = html;
}
function completedTodo(todoId) {
    let currentTodos = getTodosLocal();
    currentTodos = currentTodos.map((todo) => {
        if (todo.id === todoId) {
            return { ...todo, completed: !todo.completed };
        } else {
            return todo
        }
    })
    todos = currentTodos;
    saveToLocal();
    renderTodos();
    updateItems();
}
function filteredTodos() {
    let currentTodos = getTodosLocal();

    currentTodos = currentTodos.filter((todo) => {
        if (!todo.completed) {
            return todo;
        }
    })

    return currentTodos;
}
// let todos = [];
// let currentFilter = "all";

// addTaskBtn.addEventListener('click', () => {

//     addTodo(taskInput.value);
// })

// taskInput.addEventListener('keydown', (e) => {

//     if (e.key === "Enter") addTodo(taskInput.value);
// })
// clearCompletedBtn.addEventListener('click', clearCompleted)

// function addTodo(text) {
//     if (text.trim() === '') return;

//     const todo = {
//         id: Date.now(),
//         text,
//         completed: false
//     }

//     todos.push(todo);
//     saveToLocal();
//     renderTodos();

//     taskInput.value = ''

// }

// function saveToLocal() {
//     localStorage.setItem('todos', JSON.stringify(todos));
//     updateItemcount()
//     updateEmptyState()
// }

// function updateItemcount() {
//     // const todos = JSON.parse(localStorage.getItem('todos'));
//     const unCompletedTodos = todos.filter((todo) => !todo.completed)
//     itemsLeft.textContent = `${unCompletedTodos.length} item${unCompletedTodos.length === 1 ? '' : 's'} left`;
// }

// function updateEmptyState() {
//     const currentTodos = filteredTodos(currentFilter);
//     // console.log(currentTodos)
//     if (currentTodos.length === 0) {
//         emptyState.classList.remove('hidden');
//     } else {
//         emptyState.classList.add('hidden')
//     }


// }

// function filteredTodos(filter) {
//     switch (filter) {
//         case "active":
//             return todos.filter(todo => !todo.completed);
//         case "completed":
//             return todos.filter(todo => todo.completed);
//         default:
//             return todos;
//     }
// }

// function renderTodos() {

//     todosList.innerHTML = ''
//     const refiltered = filteredTodos(currentFilter);
//     // const storedTodos = JSON.parse(localStorage.getItem('todos'));

//     let html = '';
//     refiltered.forEach((todo) => {
//         html += `<li class="todo-item ${todo.completed ? 'completed' : ''}">
//                     <label class="checkbox-container">
//                         <input type="checkbox" ${todo.completed ? 'checked' : ''} onClick=toggleTodo(${todo.id}) class="todo-checkbox"><span class="checkmark"></span>
//                     </label >
//                     <span class="todo-item-text ">${todo.text}</span>
//                     <button class="delete-btn" onClick="deleteTodo(${todo.id})">
//                         <i class="fi fi-rr-trash"></i>
//                     </button>

//                 </li > `
//     })

//     todosList.innerHTML = html;
//     updateEmptyState()

// }

// function toggleTodo(id) {
//     todos = todos.map((todo) => {
//         if (todo.id === id) {
//             return { ...todo, completed: !todo.completed }
//         } else {
//             return todo
//         }


//     })
//     saveToLocal()
//     renderTodos()
// }

// function deleteTodo(id) {
//     todos = todos.filter((todo) => {
//         if (todo.id !== id) {
//             return todo
//         }


//     })
//     saveToLocal()
//     renderTodos()
// }
// filters.forEach((filterBtn) => {
//     filterBtn.addEventListener("click", () => {
//         // console.log(e)
//         setActiveFilter(filterBtn.getAttribute('data-filter'))
//     })
// })

// function setActiveFilter(state) {

//     currentFilter = state;
//     filters.forEach(filter => {
//         if (filter.getAttribute('data-filter') === state) {
//             filter.classList.add('active')
//         } else {
//             filter.classList.remove('active')

//         }
//     })

//     renderTodos()
// }

// function clearCompleted() {
//     todos = todos.filter(todo => {
//         return !todo.completed
//     })

//     saveToLocal()
//     renderTodos()
// }
// function loadFromLocal() {
//     const stored = localStorage.getItem('todos');
//     todos = stored ? JSON.parse(stored) : [];
// }

// // call this once at the bottom of your file, before renderTodos()
// window.addEventListener('DOMContentLoaded', () => {
//     loadFromLocal();
//     renderTodos();
//     updateItemcount();
//     updateEmptyState();
// })

// addTaskBtn.addEventListener('click', () => {
//     // console.log(taskInput.value)

//     addTodo(taskInput.value);
// })

// taskInput.addEventListener('keydown', (e) => {
//     if (e.key === 'Enter') {
//         addTodo(taskInput.value);
//     }
// });
// clearCompletedBtn.addEventListener('click', clearCompleted);

// function addTodo(text) {
//     if (text.trim() === "") return;

//     const todo = {
//         id: Date.now(),
//         text,
//         completed: false
//     }

//     todos.push(todo)
//     saveTodos();
//     renderTodos();

//     taskInput.value = '';
// }
// function saveTodos() {
//     localStorage.setItem('todos', JSON.stringify(todos));
//     updateItemsCount();
//     checkEmptyState();
// }
// function updateItemsCount() {
//     const uncomletedTodos = todos.filter(todo => !todo.completed)
//     itemsLeft.textContent = `${ uncomletedTodos?.length } item${ uncomletedTodos?.length === 1 ? '' : 's'} left`;
// }

// function checkEmptyState() {
//     const visibleTodos = filteredTodos(currentFilter);
//     if (visibleTodos.length === 0) emptyState.classList.remove('hidden');
//     else emptyState.classList.add('hidden');
// }
// function filteredTodos(filter) {
//     switch (filter) {
//         case 'active':
//             return todos.filter(todo => !todo.completed);
//         case 'completed':
//             return todos.filter(todo => todo.completed)
//         default:
//             return todos;
//     }
// }

// function renderTodos() {
//     todosList.innerHTML = '';
//     const visibleTodos = filteredTodos(currentFilter)

//     visibleTodos.forEach(todo => {
//         const todoItem = document.createElement('li');
//         todoItem.classList.add('todo-item')
//         if (todo.completed) todoItem.classList.add('completed')

//         const checkboxContainer = document.createElement('label')
//         checkboxContainer.classList.add('checkbox-container')

//         const checkbox = document.createElement('input')
//         checkbox.type = "checkbox";
//         checkbox.classList.add('todo-checkbox')
//         checkbox.checked = todo.completed
//         // here we are checking if todo is true them the checkbox will be added the color

//         checkbox.addEventListener('change', () => toggleTodo(todo.id))

//         const checkmark = document.createElement('span')

//         checkmark.classList.add('checkmark')

//         checkboxContainer.appendChild(checkbox)
//         checkboxContainer.appendChild(checkmark)

//         const todoText = document.createElement('span')
//         todoText.classList.add('todo-item-text')
//         todoText.textContent = todo.text;

//         const deleteBtn = document.createElement('button');
//         deleteBtn.classList.add('delete-btn');
//         deleteBtn.innerHTML = `< i class="fi fi-rr-trash" ></i > `;

//         deleteBtn.addEventListener('click', () => {
//             deleteTodo(todo.id)
//         })
//         todoItem.appendChild(checkboxContainer)
//         todoItem.appendChild(todoText)
//         todoItem.appendChild(deleteBtn)

//         todosList.appendChild(todoItem)


//     })

// }
// function toggleTodo(id) {
//     todos = todos.map((todo) => {
//         if (todo.id === id) {
//             return { ...todo, completed: !todo.completed };
//         }

//         return todo;
//     })
//     saveTodos();
//     renderTodos();
// }

// function deleteTodo(id) {
//     todos = todos.filter((todo) => todo.id !== id);
//     saveTodos();
//     renderTodos();
// }
// function clearCompleted() {
//     todos = todos.filter((todo) => {
//         !todo.completed;
//     })
//     saveTodos();
//     renderTodos();
// }

// function loadTodos() {
//     const storedTodos = localStorage.getItem('todos');
//     if (storedTodos) todos = JSON.parse(storedTodos);
//     renderTodos();
// }
// filters.forEach(filter => {
//     filter.addEventListener('click', () => {
//         setActiveFilter(filter.getAttribute('data-filter'))
//     })
// })

// function setActiveFilter(filter) {
//     currentFilter = filter;
//     filters.forEach(item => {
//         if (item.getAttribute('data-filter') === filter) {
//             item.classList.add('active');
//         } else {
//             item.classList.remove('active');
//         }
//     })
//     renderTodos();
// }

// function setDate() {
//     const options = { weekday: 'long', month: "short", day: 'numeric' };
//     const today = new Date();
//     dateElement.textContent = today.toLocaleDateString('en-US', options);
// }
// window.addEventListener('DOMContentLoaded', () => {
//     loadTodos();
//     updateItemsCount();
//     setDate();
// })