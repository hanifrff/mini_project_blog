import React, { useContext } from "react";
import Logo from "../img/cat.avif";
import { Link } from "react-router-dom";
import { LoginContext } from "../App";

const Navbar = () => {
  const { token, setToken } = useContext(LoginContext);
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img className="pict1" src={Logo} alt="" />
        </div>
        <div className="links">
          <Link className="link" to="/">
            <h6>Home</h6>
          </Link>
          <Link className="link" to="/myblogs">
            <h6>My Blogs</h6>
          </Link>
          {!token ? (
            <Link className="link" to="/login">
              <h6>Login</h6>
            </Link>
          ) : (
            <span
              onClick={() => {
                window.alert("Are you sure want to LOGOUT?")
                setToken("");
                localStorage.removeItem("token");
              }}
            >
              Logout
            </span>
          )}
          <Link className="link" to="/profile">
            <span>Profile</span>
          </Link>
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
