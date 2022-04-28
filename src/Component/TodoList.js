import Todo from "../Todo";

const TodoList = ({ filterTodos, completeTodo, deleteTodo }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filterTodos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
          />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
