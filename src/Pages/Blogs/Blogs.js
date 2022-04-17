import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs-container">
      <h1 className="blog-heading">Blogs</h1>
      <div className="blogs">
        <h4>Q: Difference between authorization and authentication</h4>
        <p>
          Authorization: Authorization determines a users activity what kind of
          resources he/she can use. Authorization always maintained by the
          Authority and moderators. <br />
          Authentication: By Authentication Authority identify the user.
          Authentication works through password,email,user information etc.This
          is the first step of accessing a management process.
        </p>
      </div>
      <div className="blogs">
        <h4>
          Q: Why are you using firebase? What other options do you have to
          implement authentication?
        </h4>
        <p>
          Firebase Auth provides many utilities nad method to enable a secure
          and reliable authentication into your application.If you want to
          log-in or log-out in your application by changing state ,firebase
          authentication provides you that. But we can implement other
          authentication like Firebase hooks . It is more easier and reliable to
          use in your application.
        </p>
      </div>
      <div className="blogs">
        <h4>
          Q: What other services does firebase provide other than authentication
        </h4>
        <p>
          Firebase also also provides Backend services in your application.It
          also provides ; <br />* Cloud Firestore <br />* Hosting <br />* Google
          Analysis <br />* Predictions etc...
        </p>
      </div>
    </div>
  );
};

export default Blogs;
