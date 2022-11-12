import React, {Component} from "react";

class SettingsPage extends Component{

  constructor(props){
    super(props);
    this.state = {
      message : "Hello"
    }
  }

  onChangeMessage(){
    this.setState({
      message : "yes,I've changed"
    })
  }

  render(){
    return(
      <div>
        <h1>Settings Page</h1>
        <h2>{this.state.message} This is a sample Class Based Component</h2>
        <button onClick={() => this.onChangeMessage()}>Change Message</button>
      </div>
    )
  }
}

export default SettingsPage;