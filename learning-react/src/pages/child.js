import React from "react";

const ChildPage = (props) => {
  console.log(props);
  
  const sendMessage = () => {
    let newMessage = "Im changing new value";
    props.callback(newMessage);
  }
  
  return(
    <div>
      <h1>Child Page -- {props.data}</h1>
      <h2>{props.newData}</h2>
      <button onClick={() => sendMessage()}>Send Message</button>
    </div>
  )
}

export default ChildPage;