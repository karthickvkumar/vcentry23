import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const AccountCreatePage = () => {

  const navigate = useNavigate();

  let [account, setAccount] = useState({
    email : "",
    password : ""
  });

  const createAccount = () => {
    const api_url = "https://reqres.in/api/register";

    axios.post(api_url, account)
          .then((response) => {
            let serverData = response.data;
            console.log(serverData);
            let result = {
              account_data : account,
              server_data : serverData
            }
            navigate("/about-us", {state : result});
          })
          .catch((error) => {
            alert(error.message);
          })
  }

  const handleInput = (event) => {
    setAccount({...account, [event.target.id] : event.target.value });
  }

  return(
    <div>
      <h1>Create your free account</h1>
      <div className="space">
        <label className="lable">Enter your Email ID</label>
        <input type="text" placeholder="Please enter email  id.." onChange={handleInput} id="email"/>
      </div>
      <div className="space">
        <label className="lable">Enter your Password</label>
        <input type="password" placeholder="Please enter password" onChange={handleInput} id="password"/>
      </div>
      <div className="space">
        <button onClick={() => createAccount()}>Create your New Account</button>
      </div>
    </div>
  )
}

export default AccountCreatePage;