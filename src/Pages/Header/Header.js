import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  console.log(user);
  return (
    <div className="header sticky-top">
      <div>
        <Link className="logo-area" to="/">
          On Go
        </Link>
      </div>
      <div className="link-container">
        <Link className="link-area" to="/">
          Home
        </Link>
        <Link className="link-area" to="/services">
          Services
        </Link>
        <Link className="link-area" to="/reviews">
          Reviews
        </Link>
        <Link className="link-area" to="/blogs">
          Blogs
        </Link>
        <Link className="link-area" to="/about">
          About
        </Link>
        {user ? (
          <button className="logout-btn" onClick={logout}>
            Log out
          </button>
        ) : (
          <Link className="link-area" to="/login">
            LogIn
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
