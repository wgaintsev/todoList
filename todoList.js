// Requirement 9

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

var view = {
    displayTodos: function() {
        var todoUl = document.querySelector('ul');        
        todoUl.innerHTML = "";
        for(var i = 0; i < todoList.todos.length; i++) {    
            var todoLi = document.createElement('li');                      // There should be an li element for every todo

            if(todoList.todos[i].completed === false) {
                todoLi.textContent = "( ) " + todoList.todos[i].todoText;   // Each li element should contain .todoText
            } else {
                todoLi.textContent = "(x) " + todoList.todos[i].todoText;   // Each li element should show .completed
            }
            
            todoUl.appendChild(todoLi);                       
        }
    }
}