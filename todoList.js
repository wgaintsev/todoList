// Requirement 10 + Refactoring

var todoList = {
    todos: [],
    addTodo: function(todoText) {                   
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        view.displayTodos();
    },
    changeTodo: function(position, newValue) {      
        this.todos[position].todoText = newValue;
        view.displayTodos();
    },
    deleteTodo: function(position) {            
        this.todos.splice(position, 1);
        view.displayTodos();
    },
    toggleCompleted: function(position) {           
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        view.displayTodos();
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
        view.displayTodos();
    }
};

var handlers = {
    displayTodos: function() {
        view.displayTodos();                                                    // Run new displayTodos method
    },
    // It should have working controls for .addTodo
    addTodo: function() {
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = "";                                            // Set value to blank after function run
        view.displayTodos();                                                    // Run new displayTodos method
    },
    // It should have working controls for .changeTodo
    changeTodo: function() {
        var changeTodoNumberInput = document.getElementById('changeTodoNumberInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoNumberInput.value, changeTodoTextInput.value);
        changeTodoNumberInput.value = "";                                       // Set value to blank after function run
        changeTodoTextInput.value = "";                                         // Set value to blank after function run
        view.displayTodos();
    },
    // It should have working controls for .deleteTodo
    deleteTodo: function(position) {
        todoList.deleteTodo(position);
        view.displayTodos();                                                    // Run new displayTodos method

    },
    // It should have working controls for .toggleCompleted
    toggleCompleted: function() {
        var toggleCompletedNumberInput = document.getElementById('toggleCompletedNumberInput');        
        todoList.toggleCompleted(toggleCompletedNumberInput.valueAsNumber);
        toggleCompletedNumberInput.value = "";                                  // Set value to blank after function run
        view.displayTodos();                                                    // Run new displayTodos method                      
    },
    toggleAll: function() {
        todoList.toggleAll();
        view.displayTodos();                                                    // Run new displayTodos method
    }
};

// Refactored Code

var view = {
    displayTodos: function() {
        var todoUl = document.querySelector('ul');      
        todoUl.innerHTML = "";
        for(var i = 0; i < todoList.todos.length; i++) {    
            var todoLi = document.createElement('li');          
            var todo = todoList.todos[i];                          
            var todoTextWithCompletion = ""                         
            
            if(todo.completed === false) {
                todoTextWithCompletion = "( ) " + todo.todoText;
            } else {
                todoTextWithCompletion = "(x) " + todo.todoText;
            }

            todoLi.textContent = todoTextWithCompletion          
            todoUl.appendChild(todoLi);                     
            todoLi.appendChild(this.createDeleteButton());                      // There should be a delete button for each todo
            todoLi.id = i;                                                      // Each li should have an id that has the todo position
        }
    },
    createDeleteButton: function() {                                
        var deleteButton = document.createElement('button');                    // There should be a way to create delete buttons
        deleteButton.textContent = 'Delete';                        
        deleteButton.className = 'deleteButton';
        return deleteButton;        
    },
    setUpEventListeners: function() {
        var todoUl = document.querySelector('ul');
    
        todoUl.addEventListener('click', function(event){                       // Delete buttons should have access to the todo id
            var elementClicked = event.target;                                  // Gets the element that was clicked
            if (elementClicked.className === 'deleteButton') {                  // Checks if element clicked is deleteButton
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
            }
        });
    }
};

view.setUpEventListeners();                                                     // Run setUpEventListeners

