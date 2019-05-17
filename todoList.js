// Requirement 9 Refactored

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

var handlers = {
    displayTodos: function() {
        todoList.displayTodos();
    },
    toggleAll: function() {
        todoList.toggleAll();
    },
    // It should have working controls for .addTodo
    addTodo: function() {
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
    },
    // It should have working controls for .changeTodo
    changeTodo: function() {
        var changeTodoNumberInput = document.getElementById('changeTodoNumberInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoNumberInput.value, changeTodoTextInput.value);
    },
    // It should have working controls for .deleteTodo
    deleteTodo: function() {
        var deleteTodoNumberInput = document.getElementById('deleteTodoNumberInput');
        todoList.deleteTodo(deleteTodoNumberInput.value);
    },
    // It should have working controls for .toggleCompleted
    toggleCompleted: function() {
        var toggleCompletedNumberInput = document.getElementById('toggleCompletedNumberInput');        
        todoList.toggleCompleted(toggleCompletedNumberInput.value);
    }
};

// Refactored Code

var view = {
    displayTodos: function() {
        var todoUl = document.querySelector('ul');      
        todoUl.innerHTML = "";
        for(var i = 0; i < todoList.todos.length; i++) {    
            var todoLi = document.createElement('li');          
            var todo = todoList.todos[i];                           // Created variable to clean up code
            var todoTextWithCompletion = ""                         // Created variable for completed marked + todoText
            
            if(todo.completed === false) {
                todoTextWithCompletion = "( ) " + todo.todoText;
            } else {
                todoTextWithCompletion = "(x) " + todo.todoText;
            }

            todoLi.textContent = todoTextWithCompletion             // Assigned withCompletion to textContent 
            todoUl.appendChild(todoLi);                     
        }
    }
};