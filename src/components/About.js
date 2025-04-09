import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I'm a passionate web developer with experience in React and other modern web technologies.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
