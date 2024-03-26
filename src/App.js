import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.jsx";
import Register from "./components/Register.jsx";
import Navbar from "./components/Navbar.jsx";
import Login from "./components/Login.jsx";
import AddTodo from "./components/AddTodo.jsx";
import Profile from "./components/Profile.jsx";
import { useState } from "react";
import Finish from "./components/Finish.jsx";
import Update from "./components/Update.jsx";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const [todos, setTodos] = useState([]);
  const [finish, setFinish] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Navbar isLogged={isLogged} setIsLogged={setIsLogged} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isLogged={isLogged}
                setIsLogged={setIsLogged}
                todos={todos}
                setTodos={setTodos}
                finish={finish}
                setFinish={setFinish}
              />
            }
          />
          <Route
            path="/finish"
            element={
              <Finish
                isLogged={isLogged}
                setIsLogged={setIsLogged}
                todos={todos}
                setTodos={setTodos}
                finish={finish}
                setFinish={setFinish}
              />
            }
          />
          <Route
            path="/login"
            element={<Login isLogged={isLogged} setIsLogged={setIsLogged} />}
          />
          <Route
            path="/register"
            element={<Register isLogged={isLogged} setIsLogged={setIsLogged} />}
          />
          <Route
            path="/addtodo"
            element={<AddTodo todos={todos} setTodos={setTodos} />}
          />
          <Route
            path="/profile"
            element={<Profile isLogged={isLogged} setIsLogged={setIsLogged} />}
          />
          <Route
            path="/update/:id"
            element={<Update todos={todos} setTodos={setTodos} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
