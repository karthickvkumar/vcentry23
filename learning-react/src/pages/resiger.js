import React, {useState} from "react";

const RegisterPage = () => {

  let [registerForm, setRegisterForm] = useState({
    userName : "",
    emailId : "",
    password : "",
    dateOfBirth : "",
    gender: "",
    hobbies: "",
    address: "",
    qualification: ""
  });

  const submitRegister = () => {
    console.log(registerForm);
  }

  const handleFormInput = (event) => {
    setRegisterForm({...registerForm, [event.target.name] : event.target.value});
  }

  return(
    <div>
      <h1>Register Page</h1>
      <div className="space">
        <label className="register-lable">Enter your Name :</label>
        <input type="text" placeholder="Enter your name" className="register-input" onChange={handleFormInput} name="userName"/>
      </div>
      <div className="space">
        <label className="register-lable">Enter your Email ID :</label>
        <input type="text" placeholder="Enter your email id" className="register-input" onChange={handleFormInput} name="emailId"/>
      </div>
      <div className="space">
        <label className="register-lable">Enter your Password :</label>
        <input type="password" placeholder="Enter your password" className="register-input" onChange={handleFormInput} name="password"/>
      </div>
      <div className="space">
        <label className="register-lable">Select your DOB :</label>
        <input type="date" className="register-input" onChange={handleFormInput} name="dateOfBirth"/>
      </div>
      <div className="space">
        <label className="register-lable">Select your Gender :</label>
        <input type="radio" name="gender" onChange={handleFormInput} value="Male"/>Male
        <input type="radio" name="gender" onChange={handleFormInput} value="Female"/>Female
        <input type="radio" name="gender" onChange={handleFormInput} value="Others"/>Others
      </div>
      <div className="space">
        <label className="register-lable">Select your Hobbies :</label>
        <input type="checkbox" onChange={handleFormInput} value="Cricket" name="hobbies"/>Cricket
        <input type="checkbox" onChange={handleFormInput} value="FootBall" name="hobbies"/>FootBall
        <input type="checkbox" onChange={handleFormInput} value="VollyBall" name="hobbies"/>VollyBall
        <input type="checkbox" onChange={handleFormInput} value="Hockey" name="hobbies"/>Hockey
        <input type="checkbox" onChange={handleFormInput} value="Chess" name="hobbies"/>Chess
        <input type="checkbox" onChange={handleFormInput} value="HorseRiding" name="hobbies"/>HorseRiding
      </div>
      <div className="space">
        <label className="register-lable">Enter your Address :</label>
        <textarea placeholder="Enter your address" className="register-input" onChange={handleFormInput} name="address"></textarea>
      </div>
      <div className="space">
        <label className="register-lable">Select your Higher Qualification :</label>
        <select className="register-input" defaultValue={""} onChange={handleFormInput} name="qualification">
          <option disabled value="">Please select your qualification</option>
          <option>Under Graduagate</option>
          <option>Post Graduagate</option>
          <option>Engineering Degree</option>
          <option>Diploma Degree</option>
          <option>Masters Degree</option>
        </select>
      </div>
      <div className="space">
        <button onClick={() => submitRegister()}>Create your Account</button>
      </div>
    </div>
  )
}

export default RegisterPage;