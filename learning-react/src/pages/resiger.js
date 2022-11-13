import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendUserData } from "../redux/actions/app-action";

const RegisterPage = () => {

  const dispatch = useDispatch();
  const userDataFromStore = useSelector((state) => state.AppReducer.userList );


  let [registerForm, setRegisterForm] = useState({
    userName : "",
    emailId : "",
    password : "",
    dateOfBirth : "",
    gender: "",
    hobbies: [],
    address: "",
    qualification: ""
  });

  let [formError, setFormError] = useState({
    userName : false,
    emailId : false,
    password : false,
    dateOfBirth : false,
    gender: false,
    hobbies: false,
    address: false,
    qualification: false
  })

  let [accountList, setAccountList] = useState([]);

  const submitRegister = () => {
    setFormError({
      userName : registerForm.userName === "" ? true : false,
      emailId : registerForm.emailId === "" ? true : false,
      password : registerForm.password === "" ? true : false,
      dateOfBirth : registerForm.dateOfBirth === "" ? true : false,
      gender : registerForm.gender === "" ? true : false,
      hobbies : registerForm.hobbies.length === 0 ? true : false,
      address : registerForm.address === "" ? true : false,
      qualification : registerForm.qualification === "" ? true : false
    });

    accountList.push(registerForm);
    setAccountList(accountList);
   
    // let data = sendUserData(registerForm);
    // dispatch(data);
    dispatch(sendUserData(registerForm));
    // setAccountList([...accountList, registerForm]);
  }

  const handleFormInput = (event) => {
    if(event.target.name === "hobbies"){
      if(event.target.checked){
        registerForm.hobbies.push(event.target.value);
      }
      else{
        const index = registerForm.hobbies.indexOf(event.target.value);
        registerForm.hobbies.splice(index, 1);
      }
      setRegisterForm({...registerForm, hobbies : registerForm.hobbies });
    }
    else{
      setRegisterForm({...registerForm, [event.target.name] : event.target.value});
    }
  }

  return(
    <div>
      <h1>Register Page</h1>
      <div className="space">
        <label className="register-lable">Enter your Name :</label>
        <input type="text" placeholder="Enter your name" className={formError.userName ? "register-input input-error" : "register-input"} onChange={handleFormInput} name="userName"/>
        { formError.userName && <p className="error">Please enter a valid user name</p>}
      </div>
      <div className="space">
        <label className="register-lable">Enter your Email ID :</label>
        <input type="text" placeholder="Enter your email id" className={formError.emailId ? "register-input input-error" : "register-input"} onChange={handleFormInput} name="emailId"/>
        {formError.emailId && <p className="error">Please enter a valid email id</p>}
      </div>
      <div className="space">
        <label className="register-lable">Enter your Password :</label>
        <input type="password" placeholder="Enter your password"  className={formError.password ? "register-input input-error" : "register-input"} onChange={handleFormInput} name="password"/>
        { formError.password && <p className="error">Please enter a valid password</p>}
      </div>
      <div className="space">
        <label className="register-lable">Select your DOB :</label>
        <input type="date" className={formError.dateOfBirth ? "register-input input-error" : "register-input"}  onChange={handleFormInput} name="dateOfBirth"/>
        {formError.dateOfBirth && <p className="error">Please selecte a date of birth</p>}
      </div>
      <div className="space">
        <label className="register-lable">Select your Gender :</label>
        <input type="radio" name="gender" onChange={handleFormInput} value="Male"/>Male
        <input type="radio" name="gender" onChange={handleFormInput} value="Female"/>Female
        <input type="radio" name="gender" onChange={handleFormInput} value="Others"/>Others
        {formError.gender && <p className="error">Please select any one gender</p>}
      </div>
      <div className="space">
        <label className="register-lable">Select your Hobbies :</label>
        <input type="checkbox" onChange={handleFormInput} value="Cricket" name="hobbies"/>Cricket
        <input type="checkbox" onChange={handleFormInput} value="FootBall" name="hobbies"/>FootBall
        <input type="checkbox" onChange={handleFormInput} value="VollyBall" name="hobbies"/>VollyBall
        <input type="checkbox" onChange={handleFormInput} value="Hockey" name="hobbies"/>Hockey
        <input type="checkbox" onChange={handleFormInput} value="Chess" name="hobbies"/>Chess
        <input type="checkbox" onChange={handleFormInput} value="HorseRiding" name="hobbies"/>HorseRiding
        {formError.hobbies && <p className="error">Please select any one hobbies</p>}
      </div>
      <div className="space">
        <label className="register-lable">Enter your Address :</label>
        <textarea placeholder="Enter your address" className={formError.address ? "register-input input-error" : "register-input"}  onChange={handleFormInput} name="address"></textarea>
        {formError.address && <p className="error">Please enter a valid address</p>}
      </div>
      <div className="space">
        <label className="register-lable">Select your Higher Qualification :</label>
        <select className={formError.qualification ? "register-input input-error" : "register-input"} defaultValue={""} onChange={handleFormInput} name="qualification">
          <option disabled value="">Please select your qualification</option>
          <option>Under Graduagate</option>
          <option>Post Graduagate</option>
          <option>Engineering Degree</option>
          <option>Diploma Degree</option>
          <option>Masters Degree</option>
        </select>
        {formError.qualification && <p className="error">Please select any one qualification</p>}
      </div>
      <div className="space">
        <button onClick={() => submitRegister()}>Create your Account</button>
      </div>
      <div style={{"height": "600px"}}>
        <table id="customers">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email ID</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Hobbies</th>
              <th>Address</th>
              <th>Qualification</th>
            </tr>
          </thead>
          <tbody>
            {
              userDataFromStore.map((value, index) => {
                return(
                  <tr key={index}>
                    <td>{value.userName}</td>
                    <td>{value.emailId}</td>
                    <td>{value.dateOfBirth}</td>
                    <td>{value.gender}</td>
                    <td>{value.hobbies}</td>
                    <td>{value.address}</td>
                    <td>{value.qualification}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RegisterPage;