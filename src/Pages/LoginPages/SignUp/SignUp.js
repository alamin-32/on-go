import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import auth from "../../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";

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

  // if (user) {
  //   navigate("/services");
  // }

  if (createError) {
    console.log(createError);
  }

  return (
    <div className="container w-50 mx-auto">
      <h1 className="text-primary text-center mt-2">This is log in</h1>
      <Form onSubmit={handleCreateUser}>
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmailBlur}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handlePasswordBlur}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <p>{error}</p>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            onBlur={handleConfirmPasswordBlur}
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Group>
        <p>
          Already have an Account? <Link to="/login">Log in</Link>
        </p>
        <Button variant="primary" type="submit">
          SignUp
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
