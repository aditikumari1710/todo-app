const Todo = ({ todo, deleteTodo, completeTodo }) => {
  return (
    <div className="todo">
      <li className="todo-item">
        {todo.text} - {todo.completed ? "completed" : "Uncompleted"}
      </li>
      <button onClick={() => completeTodo(todo.id)} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={() => deleteTodo(todo.id)} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
