import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import {
  useSignInWithEmailAndPassword,
  useUpdatePassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error,setError]=useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updatePassword, updating] = useUpdatePassword(auth);

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
  // if (error) {
  //   setError('Insert Wrong password');
  // }

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
          <input className="form-submit" type="submit" value="login" />
        </form>
        <p>
          New to this site?
          <Link className="form-link" to="/signUp">
            Create an Account
          </Link>
        </p>
        <p>
          Forgot Password?
          <Link
            onClick={async () => {
              await updatePassword(email);
              toast("Password Set Successfully");
            }}
            className="form-link"
            to="/login"
          >
            Reset Now
          </Link>
        </p>
        <div className="or">
          <div className="or-area"></div>
          or
          <div className="or-area"></div>
        </div>
        <GoogleLogin></GoogleLogin>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
