import React, {useState} from "react";

const SimpleFormSubmition = () => {
  
  let message = "Hi there, Good Morning!";
  let address = {
    street: "appasamy street",
    area: "washermenpet"
  }

  // let [variableName, functionName] = useState(intialValue);
  let [loginForm, setLoginForm] = useState({
    username : "",
    password : ""
  });

  let [inlineCondtion, setInlineCondition] = useState(true);

  let [ifElseCondition, setIfElseCondition] = useState(false);

  let [passwordVisiblity, setPasswordVisiblity] = useState(false);
  
  const onSubmitForm = () => {
    console.log(loginForm)
  }

  const onHandleInput = (event) => {
    // console.log(event.target.value, event.target.id);
    setLoginForm({...loginForm, [event.target.id] : event.target.value });
  }

  const handleConditionRendering = (condition) => {
    setInlineCondition(condition);
  }

  const handleIfElseRendering = () => {
    let condtion = !ifElseCondition;
    setIfElseCondition(condtion);
  }

  const handlePasswordVisiblity = (condition) => {
    setPasswordVisiblity(condition);
  }

  return(
    <div>
      <h1>{message}</h1>
      <h2>My current location is {address.street} and {address.area}</h2>
      <h2>The username is {loginForm.username}</h2>
      <h2>The password is {loginForm.password}</h2>
      <div className="space">
        <label className="lable">Enter your UserName</label>
        <input type="text" placeholder="Please enter username.." onChange={onHandleInput} id="username"/>
      </div>
      <div className="space">
        <label className="lable">Enter your Password</label>
        <input type={passwordVisiblity ?  "text" : "password"} placeholder="Please enter password" onChange={onHandleInput} id="password"/>
        
        {passwordVisiblity ? 
        <img src={require("../images/open-eye.png")} alt="open eye" className="password-icon" onClick={() => handlePasswordVisiblity(false)}/> : 
        <img src={require("../images/close-eye.png")} alt="close eye" className="password-icon" onClick={() => handlePasswordVisiblity(true)}/>}

      </div>
      <div className="space">
        <button onClick={() => onSubmitForm()}>Submit Form</button>
      </div>
      <div>
        <h2>Conditional Rendering</h2>
        <button onClick={() => handleConditionRendering(true)}>Show message</button>
        <button onClick={() => handleConditionRendering(false)}>Hide message</button>

        { inlineCondtion && <div>
                    <h1>This is a Inline If Conditional</h1>
                    <h1>I will be show & hide based on a Condition</h1>
                  </div>  
        }

      </div>
      <div>
        <h1>Inline If-Else Condition</h1>
        
        <button onClick={() => handleIfElseRendering()}>Switch {ifElseCondition ? "ON" : "OFF"}</button>

        { ifElseCondition ? <img src="https://cdn.mos.cms.futurecdn.net/HaPnm6P7TZhPQGGUxtDjAg-1200-80.jpg" style={{"width" : "100px"}}/>
          :
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Gluehlampe_01_KMJ.png/640px-Gluehlampe_01_KMJ.png" style={{"width" : "100px"}}/>
        }
        

        
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