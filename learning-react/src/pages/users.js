import React, {useState, useEffect} from "react";
import axios from "axios";

const UserPage = () => {

  let [profiles, setProfiles] = useState([]);

  useEffect(() => {
    loadProfiles(1);
  }, []);

  const loadProfiles = (pageNumber) => {
   const api_url = "https://reqres.in/api/users?page=" + pageNumber;

   axios.get(api_url)
        .then((response) => {
          let serverData = response.data;
          setProfiles(serverData.data);
        })
        .catch((error) => {
          console.log(error);
          alert(error.message);
        });  
  }

  return(
    <div>
      <h1>List of Users</h1>
      <table id="customers">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email ID</th>
              <th>Profile Pic</th>
            </tr>
          </thead>
          <tbody>
            {
              profiles.map((value, index) => {
                return(
                  <tr key={index}>
                    <td>{value.id}</td>
                    <td>{value.first_name} {value.last_name}</td>
                    <td>{value.email}</td>
                    <td>
                      <img src={value.avatar} alt="profile" className="avatar"/>
                    </td>
                  </tr>
                )
              })
            }

            {profiles.length === 0 && 
              <tr>
                <td colSpan={4}>No Records Available</td>
              </tr>
            }
          </tbody>
      </table>
      <div>
        <button onClick={() => loadProfiles(1)}>Page 1</button>
        <button onClick={() => loadProfiles(2)}>Page 2</button>
        <button onClick={() => loadProfiles(3)}>Page 3</button>
      </div>
    </div>
  )
}

export default UserPage;