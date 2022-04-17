import React from "react";
import "./About.css";
import mybg from "../../images/mybg.png";

const About = () => {
  return (
    <div className="about-me">
      <div className="about-info">
        <h1 className="h1">Hi! This is Al-Amin</h1>
        <h3>I am a student and living in Dhaka</h3>
        <p>
          Besides doing study, recently i am learning Web developing and trying
          to build my own websites.Thought it is complex but i am enjoying much
          and taking the challenge further more.Recently i am working on my own
          projects.
        </p>
      </div>
      <div>
        <img className="bg-img" src={mybg} alt="" />
      </div>
    </div>
  );
};

export default About;
