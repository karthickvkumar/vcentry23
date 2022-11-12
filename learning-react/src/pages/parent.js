import React from "react";
import ChildPage from "./child";

const ParentPage = () => {
  let message = "Hey HI!";
  let newMessage = "Good Day";

  const incommingMessage = (message) => {
    alert(message)
  }

  return(
    <div>
      <h1>Parent Page - {message}</h1>
      <div>
        <ChildPage data={message} newData={newMessage} callback={incommingMessage}></ChildPage>
      </div>
    </div>
  )
}

export default ParentPage;