import React from "react";

function NavBar() {
  // update the JSX being returned!
  return <nav>
    <a href="#home">Home</a>
    <div id="home">
      <h1 style={{color: "firebrick"}}>
        Your Name is a Web Developer from Your City
      </h1>
    </div>
    <a href="#about">About</a>
  </nav>;
}

export default NavBar;
