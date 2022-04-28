import React from "react";
import { useState } from "react";
const Form = ({ inputText, todos, setTodos, setInputText, setFilter }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const sumbitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 100 },
    ]);
    setInputText("");
  };

  //CHANGING THE FILTER FOR DISPLAYING-ALL,COMPLETED,UNCOMPLETED
  const setValues = (e) => {
    //console.log(e, e.target.value);
    setFilter(e.target.value);
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      ></input>

      <button onClick={sumbitTodoHandler} className="todo-button" type="sumbit">
        <i className="fas fa-plus-square"></i>
      </button>

      <div className="select">
        <select name="todos" className="filter-todo" onChange={setValues}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
