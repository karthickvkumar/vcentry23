import React from "react";
import axios from "axios";

const UserPage = () => {

  const loadProfiles = () => {
   const api_url = "https://reqres.in/api/users?page=2";

   axios.get(api_url)
        .then((response) => {
          let serverData = response.data;
          console.log(serverData)
        })
        .catch((error) => {
          console.log(error);
          alert(error.message);
        });  

  }

  return(
    <div>
      <h1>List of Users</h1>
      <button onClick={() => loadProfiles()}>Load User Profiles</button>
    </div>
  )
}

export default UserPage;