import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Login from "./Login";
import { Link } from "react-router-dom";

const Home = ({ todos, finish, setTodos, setFinish, isLogged }) => {
  const [remind, setRemind] = useState([]);

  const hour = new Date().getHours();
  const min = new Date().getMinutes();

  console.log(hour, min);

  useEffect(() => {
    setRemind(
      todos.filter((todo) => {
        const todoHour = Number(todo.date.slice(11, 13));
        const todoMin = Number(todo.date.slice(14, 16));

        if (hour === todoHour) {
          return todoMin >= min && todoMin <= min + 15;
        } else if (hour === todoHour - 1) {
          return (
            (todoMin >= min && todoMin <= 59) ||
            (todoMin >= 0 && todoMin <= min + 15 - 60)
          );
        }
        return false;
      })
    );
  }, [todos]);

  const clickHandler = (e) => {
    e.preventDefault();
    setTodos(todos.filter((todo, i) => i !== Number(e.target.id)));
    setFinish([
      ...finish,
      todos.filter((todo, i) => i === Number(e.target.id))[0],
    ]);
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    setTodos(todos.filter((todo, i) => i !== Number(e.target.id)));
    console.log(e.target.id);
  };

  // console.log(todos, finish, remind);

  return (
    <>
      <div className="home">
        {isLogged && isLogged ? (
          <>
            {todos.map((todo, i) => (
              <div key={i} className="home-mix">
                <div className="home-todo">
                  <h1>{todo.date}</h1>
                  <p>{todo.data}</p>
                </div>
                <button id={i} onClick={clickHandler}>
                  FINISH
                </button>
                <div className="flex">
                  <Link to={`/update/${i}`}>UPDATE</Link>
                  <button id={i} onClick={deleteHandler}>
                    DELETE
                  </button>
                </div>
              </div>
            ))}
            <div className="home-end">
              <Link to="/addtodo">
                <span>+</span>
              </Link>
              <Link to="/finish">
                <span>Finish</span>
              </Link>
            </div>
            {remind &&
              remind.map((todo, i) => (
                <div
                  key={i}
                  className="remainder"
                  style={{ bottom: `${60 * i}px` }}
                >
                  <h3>
                    Time Left{" "}
                    {Number(todo.date.slice(14, 16)) -
                      (new Date().getMinutes() % 60)}{" "}
                    Min :{" "}
                    {todo.data.length > 10
                      ? todo.data.slice(0, 10) + "..."
                      : todo.data}
                  </h3>
                </div>
              ))}
          </>
        ) : (
          <div style={{ height: "82vh" }}>Not Found</div>
        )}
      </div>
    </>
  );
};

export default Home;

// useEffect(() => {
//   // Filter todos based on date condition
//   const filteredTodos = props.todos.filter(todo => {
//     const todoDate = new Date(todo.date);
//     const today = new Date();
//     return todoDate.getDate() === today.getDate() && todoDate.getMonth() === today.getMonth() && todoDate.getFullYear() === today.getFullYear();
//   });

//   // Set the filtered todos to remind state variable
//   setRemind(filteredTodos);

//   // Log the first todo's date
//   remind && console.log(filteredTodos.length > 0 ? filteredTodos[0].date.slice(0, 10) : "No todos for today");
// }, [props.todos]); // Trigger effect when props.todos change
