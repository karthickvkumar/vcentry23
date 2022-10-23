import React from "react";

const SimpleFormSubmition = () => {
  
  let message = "Hi there, Good Morning!";
  let address = {
    street: "appasamy street",
    area: "washermenpet"
  }
  
  const onSubmitForm = () => {
    alert("Submitted successfully");
  }

  return(
    <div>
      <h1>{message}</h1>
      <h2>My current location is {address.street} and {address.area}</h2>
      <div className="space">
        <label className="lable">Enter your UserName</label>
        <input type="text" placeholder="Please enter username.." />
      </div>
      <div className="space">
        <label className="lable">Enter your Password</label>
        <input type="password" placeholder="Please enter password" />
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