import React, { useState } from "react";
import auth from "../../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import "../Login/Login.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const [createUserWithEmailAndPassword, user, loading, createError] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const handleEmailBlur = event => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = event => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordBlur = event => {
    setConfirmPassword(event.target.value);
  };

  const handleCreateUser = event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Password invalid");
    }
    if (password.length < 6) {
      setError("Too short password");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate("/home");
  }

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Sign Up</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              placeholder="Email"
              name="email"
              id=""
              required
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
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Confirm Password</label>
            <input
              onBlur={handleConfirmPasswordBlur}
              type="password"
              name="password"
              placeholder="Password"
              id=""
              required
            />
          </div>
          <input className="form-submit" type="submit" value="Sign Up" />
        </form>
        <p>
          Already Have an Account?
          <Link className="form-link" to="/login">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
