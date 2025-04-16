import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I love building things with React and exploring the world of web development!</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
  