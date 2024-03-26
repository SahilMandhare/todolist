import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = ({ todos, setTodos }) => {
  const [todoData, setTodoData] = useState(null);
  const navigate = useNavigate();
  const param = useParams();
  
  useEffect(() => {
    setTodoData(todos.filter((todo, i) => i == param.id)[0]);
  }, [todos]);

  const inputHandler = (e) => {
    setTodoData({ ...todoData, [e.target.id]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const updatedTodos = todos.filter((todo, i) => i != param.id);
    setTodos([...updatedTodos, todoData]);
    navigate("/");
  };

  return (
    <>
      {todoData && (
        <div className="page">
          <h1>Add Todo</h1>
          <form onSubmit={submitHandler} className="page-in">
            <input
              id="date"
              placeholder="Date"
              type="datetime-local"
              value={todoData.date}
              onChange={inputHandler}
              required
            />
            <textarea
              id="data"
              placeholder="Message"
              type="text"
              defaultValue={todoData.data}
              onChange={inputHandler}
              required
            />
            <button>Update</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Update;
