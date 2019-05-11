// Requirement 3

// It should store the todos array on an object
var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function() {                  // It should have a displayTodos method
        console.log('My Todos: ', this.todos);
    },
    addTodo: function(todo) {                   // It should have an addTodos method
        this.todos.push(todo);
        this.displayTodos();
    },
    changeTodo: function(position, newValue) {  // It should have a changeTodos method
        this.todos[position] = nevalue;
        this.displayTodos();
    },
    deleteTodo: function(position) {            // It should have a deleteTodos method
        this.todos.splice(position, 1);
        this.displayTodos();
    }
};
