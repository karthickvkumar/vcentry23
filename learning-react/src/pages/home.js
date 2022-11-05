import React from "react";
import {NavLink, useNavigate} from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  
  const moveToTrash = () => {
    navigate("/mail/trash");
  }

  return(
    <div>
      <h1>This is a Home Page</h1>
      <NavLink to="/contact">Go to Contact Page</NavLink>
      <br></br>
      <NavLink to="/about-us">About Me!!</NavLink>
      <br></br>
      <NavLink to="/mail/inbox">Go to Mail Box</NavLink>
      <br></br>
      <NavLink to="/register">Signup for free Registration</NavLink>
      <br></br>
      <button onClick={() => moveToTrash()}>Move to Trash</button>
      <br></br>
      <NavLink to="/users">To view List of All Users</NavLink>
    </div>
  )
}

export default HomePage;