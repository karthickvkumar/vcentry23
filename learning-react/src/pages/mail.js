import React from "react";
import {Outlet, NavLink} from "react-router-dom";

const MailPage = () => {
  return(
    <div className="container">
     <div className="header">
      <NavLink to="/">back</NavLink>
     </div>
     <div className="main-content">
      <div className="sidebar">
        <NavLink to="/mail/inbox">Inbox Page</NavLink>
        <br></br>
        <NavLink to="/mail/sent">Sent Page</NavLink>
        <br></br>
        <NavLink to="/mail/trash">Trash Page</NavLink>
      </div>
      <div className="content">
        <Outlet></Outlet>
      </div>
     </div>
    </div>
  )
}

export default MailPage;