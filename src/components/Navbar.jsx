import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="navbar-title">Todo's</div>
      <div className="navbar-option" style={!props.isLogged ? {justifyContent:"end"} : {}}>
        {props.isLogged ? (
          <>
            <Link to="/">
              <div>Home</div>
            </Link>
            <Link to="/profile">
              <div>Profile</div>
            </Link>
            <Link to="/login">
              <div onClick={() => props.setIsLogged(false)}>Logout</div>
            </Link>
          </>
        ) : (
          <Link to="/login">
            <div>Login</div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
