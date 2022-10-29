import React from "react";
import {NavLink} from "react-router-dom";

const ContactPage = () => {
  return(
    <div>
      <h1>This is a Contact Page</h1>
      <NavLink to="/">back to Home Page</NavLink>
    </div>
  )
}

export default ContactPage;