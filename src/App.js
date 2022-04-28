import "./App.css";
import { useState, useEffect } from "react";
import Form from "./Component/Form";
import TodoList from "./Component/TodoList";
import react from "react";
function App() {
  const [inputText, setInputText] = useState(""); //Taking input
  const [todos, setTodos] = useState([]); //List of Input
  const [fiLter, setFilter] = useState("all"); //For displaying filter values
  const [filterTodos, setFilterTodos] = useState([]);
  
  /* for displaying filter data(completed/uncompleted/all)*/
  const filterHandler = () => {
    switch (fiLter) {
      case "completed":
        setFilterTodos(todos.filter((todo) => todo.completed));
        break;
      case "uncompleted":
        setFilterTodos(todos.filter((todo) => !todo.completed));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };

  //UseEffect
  useEffect(() => {
    filterHandler();
  }, [fiLter, todos]);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };


let todoListComponent=null;
if( fiLter=='all'){
 todoListComponent= <TodoList filterTodos={todos} deleteTodo={deleteTodo} completeTodo={completeTodo}/>
}
else if(fiLter=='completed'){
todoListComponent=<TodoList  filterTodos={todos.filter((todo) => todo.completed)}  deleteTodo={deleteTodo} completeTodo={completeTodo} />
}
else if(fiLter=='uncompleted'){
  todoListComponent=<TodoList  filterTodos={todos.filter((todo) => !todo.completed)}  deleteTodo={deleteTodo} completeTodo={completeTodo} />
}
else {
 todoListComponent=<TodoList filterTodos={[]}  deleteTodo={deleteTodo} completeTodo={completeTodo} />
}



    

  return (
    <div className="App">
      <header>
        <h1>Aditi's To Do List</h1>
      </header>

      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setFilter={setFilter}
      />
  
  
{/* 
      <TodoList
        filterTodos={filterTodos}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
      /> */}

    {todoListComponent}
      
      
    

     


    </div>
  );
}

export default App;
