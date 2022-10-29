import React from "react";
import {NavLink} from "react-router-dom";

const HomePage = () => {
  return(
    <div>
      <h1>This is a Home Page</h1>
      <NavLink to="/contact">Go to Contact Page</NavLink>
      <br></br>
      <NavLink to="/about-us">About Me!!</NavLink>
      <br></br>
      <NavLink to="/mail">Go to Mail Box</NavLink>
    </div>
  )
}

export default HomePage;