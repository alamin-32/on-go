import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import google from "../../../images/google.png";

const GoogleLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorType;

  if (error) {
    errorType = (
      <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
    );
  }

  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div>
     
      {errorType}
      <button onClick={() => signInWithGoogle()} className="google-signIn">
        <img className="google-icon" src={google} alt="" />
        Google Sign in
      </button>
    </div>
  );
};

export default GoogleLogin;
