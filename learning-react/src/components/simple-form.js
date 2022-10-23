import React, {useState} from "react";

const SimpleFormSubmition = () => {
  
  let message = "Hi there, Good Morning!";
  let address = {
    street: "appasamy street",
    area: "washermenpet"
  }

  // let [variableName, functionName] = useState(intialValue);
  let [userName, setUserName] = useState("");
  
  const onSubmitForm = () => {
    alert("Submitted successfully");
  }

  const onHandleInput = (event) => {
    setUserName(event.target.value);
  }

  return(
    <div>
      <h1>{message}</h1>
      <h2>My current location is {address.street} and {address.area}</h2>
      <h2>The username is {userName}</h2>
      <div className="space">
        <label className="lable">Enter your UserName</label>
        <input type="text" placeholder="Please enter username.." onChange={onHandleInput} />
      </div>
      <div className="space">
        <label className="lable">Enter your Password</label>
        <input type="password" placeholder="Please enter password" onChange={onHandleInput} />
      </div>
      <div className="space">
        <button onClick={() => onSubmitForm()}>Submit Form</button>
      </div>
    </div>
  )
}

export default SimpleFormSubmition;

/*
ES5
function SimpleFormSubmition(){
  return(
    <div>

    </div>
  )
}
*/