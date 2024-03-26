import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [userData, setUserData] = useState({
    email: localStorage.getItem("email"),
    name: localStorage.getItem("name"),
    contact: localStorage.getItem("contact"),
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const inputHandler = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (userData.password === userData.repassword) {
      localStorage.setItem("email", userData.email);
      localStorage.setItem("name", userData.name);
      localStorage.setItem("contact", userData.contact);
      localStorage.setItem("password", userData.password);
      setError(null)
    }else{

        setError("Password Not Match");
    }
  };

  return (
    <div className="page">
      <h1>Profile</h1>
      <form onSubmit={submitHandler} className="page-in">
        <input
          id="email"
          placeholder="Email"
          type="email"
          onChange={inputHandler}
          value={userData.email}
          required
        />
        <input
          id="name"
          placeholder="Name"
          type="text"
          onChange={inputHandler}
          value={userData.name}
          required
        />
        <input
          id="contact"
          placeholder="Contact No."
          type="number"
          onChange={inputHandler}
          value={userData.contact}
          required
        />
        <input
          id="password"
          placeholder="Password"
          type="password"
          onChange={inputHandler}
          required
        />
        <input
          id="repassword"
          placeholder="Re-type Password"
          type="password"
          onChange={inputHandler}
          required
        />
        <button>Update</button>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </form>
    </div>
  );
};

export default Profile;
