// Requirement 5

var todoList = {
    todos: [],
    displayTodos: function() {        
        // .displayTodos should tell you if .todos is empty
        if(this.todos.length === 0) {                      
            console.log("Your todo list is empty!");                
        } else {
            console.log('My Todos:');
            // .displayTodos should show .todoText as well as .completed
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
    }
};