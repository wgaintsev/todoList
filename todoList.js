// Requirement 7

var todoList = {
    todos: [],
    displayTodos: function() {        
        if(this.todos.length === 0) {                      
            console.log("Your todo list is empty!");                
        } else {
            console.log('My Todos:');
            for (var i = 0; i < this.todos.length; i++) {           
                if(this.todos[i].completed === false) {             
                    console.log('( ) ' + this.todos[i].todoText);  
                } else {
                    console.log('(x) ' + this.todos[i].todoText);
                }
            }
        }
    },
    addTodo: function(todoText) {                   
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, newValue) {      
        this.todos[position].todoText = newValue;
        this.displayTodos();
    },
    
    deleteTodo: function(position) {            
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function(position) {           
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    },
    toggleAll: function() {
        var totalTodos = this.todos.length;                
        var completedTodos = 0;                             
        for (var i = 0; i < this.todos.length; i++) {       
            if (this.todos[i].completed === true) {        
                completedTodos++                            
            } 
        }
        if (totalTodos === completedTodos) {                
            for (var i = 0; i < this.todos.length; i++) {
                this.todos[i].completed = false
            }
        } else {                                            
            for (var i = 0; i < this.todos.length; i++) {
                this.todos[i].completed = true;
            }
        }
        this.displayTodos();
    }
};

// We want to get access to the "displayTodos" and "toggleAll" buttons
var displayTodosButton = document.getElementById('displayTodosButton')
var toggleAllButton = document.getElementById('toggleAllButton');

// We want to run displayTodos method when button is clicked 
displayTodosButton.addEventListener('click', function() {
    todoList.displayTodos();
});

toggleAllButton.addEventListener('click', function(){
    todoList.toggleAll();
});