import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTodo = ({ todos, setTodos }) => {
  const [todoData, setTodoData] = useState(null);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    setTodoData({ ...todoData, [e.target.id]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, todoData]);
    navigate("/");
  };
  
  return (
    <div className="page">
      <h1>Add Todo</h1>
      <form onSubmit={submitHandler} className="page-in">
        <input
          id="date"
          placeholder="Date"
          type="datetime-local"
          onChange={inputHandler}
          required
        />
        <textarea
          id="data"
          placeholder="Message"
          type="text"
          onChange={inputHandler}
          required
        />
        <button>ADD</button>
      </form>
    </div>
  );
};

export default AddTodo;
