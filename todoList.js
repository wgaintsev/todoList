// Requirement 4

var todoList = {
    todos: [],
    displayTodos: function() {                  
        console.log('My Todos: ', this.todos);
    },
    addTodo: function(todoText) {                   // todoList.addTodo should add objects 
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, newValue) {      // todoList.changeTodo should change the todoText property
        this.todos[position].todoText = newValue;
        this.displayTodos();
    },
    
    deleteTodo: function(position) {            
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function(position) {           // todoList.toggleCompleted should change the completed property
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    }
};