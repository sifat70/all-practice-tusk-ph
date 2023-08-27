function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayTodos(data))
}


function displayTodos(todos){
    const todosContainer = document.getElementById('todos-container');
    for(const todo of todos){
        const todoDiv = document.createElement('div');
        todoDiv.innerHTML = `
        <h4>User- ${todo.userId}</h4>
        <h3>Id: ${todo. id}</h3>
        <p>Title: ${todo. title}</p>
        <p>completed: ${todo.completed === true ? 'complete': 'not complete'}</p>
        `
        todosContainer.appendChild(todoDiv)
    }
}
loadTodos()