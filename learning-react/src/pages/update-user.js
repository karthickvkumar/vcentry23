import React, {useState} from "react";
import axios from "axios";

const UpdateUser = () => {

  let [account, setAccount] = useState({
    name : "",
    job : ""
  });

  const updateAccount = () => {
    const url = "https://reqres.in/api/users/2";

    axios.put(url, account)
        .then((response) => {
          let serverData = response.data;
          console.log(serverData);
          alert("User Profile has been updated Successfully");
        })
        .catch((error) => {
          console.log(error);
        })

  }

  const handleInput = (event) => {
    setAccount({...account, [event.target.id] : event.target.value });
  }

  return(
    <div>
      <h1>Update your User information</h1>
      <div className="space">
        <label className="lable">Enter your Name</label>
        <input type="text" placeholder="Please enter name" onChange={handleInput} id="name"/>
      </div>
      <div className="space">
        <label className="lable">Enter your Job</label>
        <input type="text" placeholder="Please enter job" onChange={handleInput} id="job"/>
      </div>
      <div className="space">
        <button onClick={() => updateAccount()}>Update User</button>
      </div>
    </div>
  )
}

export default UpdateUser;