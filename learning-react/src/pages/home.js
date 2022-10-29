import React from "react";
import {NavLink} from "react-router-dom";

const HomePage = () => {
  return(
    <div>
      <h1>This is a Home Page</h1>
      <NavLink to="/contact">Go to Contact Page</NavLink>
      <br></br>
      <NavLink to="/about-us">About Me!!</NavLink>
    </div>
  )
}

export default HomePage;