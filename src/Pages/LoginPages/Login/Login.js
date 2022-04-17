import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleEmailBlur = event => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = event => {
    setPassword(event.target.value);
  };

  if (user) {
    navigate(from, { replace: true });
  }

  const handleCreateUser = event => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  if (loading) {
    return <Spinner animation="border" />;
  }
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              placeholder="Email"
              name="email"
              id=""
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              placeholder="Password"
              id=""
            />
          </div>
          <input className="form-submit" type="submit" value="login" />
        </form>
        <p>
          New to this site?{" "}
          <Link className="form-link" to="/signUp">
            Create an Account
          </Link>
        </p>
        <div className="or">
          <div className=""></div>
          <p>or</p>
          <div></div>
        </div>
        <button className="google-signIn"> Google Sign in</button>
      </div>
    </div>
  );
};

export default Login;
