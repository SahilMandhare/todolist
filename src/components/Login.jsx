import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Error from "./Error";

const Login = (props) => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const inputHandler = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      userData.email === localStorage.getItem("email") &&
      userData.password === localStorage.getItem("password")
    ) {
      props.setIsLogged(true);
      navigate("/");
      return
    }
    if (
      userData.email !== localStorage.getItem("email") &&
      userData.password !== localStorage.getItem("password")
    ) {
      setError("Invalid Email & Password");
      return
    }
    if (userData.email !== localStorage.getItem("email")) {
      setError("Invalid Email");
      return
    }
    if (userData.password !== localStorage.getItem("password")) {
      setError("Invalid Password");
      return
    }
  };

  return (
    <>
      {error && <Error error={error} />}
      <div className="page">
        <h1>Login</h1>
        <form onSubmit={submitHandler} className="page-in">
          <input
            id="email"
            placeholder="Email"
            type="text"
            onChange={inputHandler}
            required
          />
          <input
            id="password"
            placeholder="Password"
            type="password"
            onChange={inputHandler}
            required
          />
          <button>LOGIN</button>
          <p>
            Don't Have Acoount? <Link to="/register">SignUp</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
