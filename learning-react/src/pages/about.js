import React from "react";
import {useLocation} from "react-router-dom";

const AboutPage = () => {
  const location = useLocation();
  console.log(location);

  var state = location?.state;
  var account = state?.account_data;

  return(
    <div>
      <h1>This is a About Page {account?.email}</h1>
    </div>
  )
}

export default AboutPage;