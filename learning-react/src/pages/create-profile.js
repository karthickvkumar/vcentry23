import React, {useState, useEffect} from 'react';
import axios from 'axios';

const CreateProfilePage = () => {

  useEffect(() => {
    listDestination();
  }, [])

  const [form, setForm] = useState({
    image: '',
    name : '',
    count : ''
  })

  const [list, setList] = useState([]);

  const handleInput = (event) => {
    setForm({...form, [event.target.name] : event.target.value});
  }

  const photoUpload = (event) => {
    const reader = new FileReader();
    const file = event.target.files[0];
    
    // console.log("reader", reader)
    // console.log("file", file)
    
    reader.onload = () => {
    //  console.log(reader.result);
     setForm({...form, "image" : reader.result});
    }
    reader.readAsDataURL(file);
  }

  const submitForm = () => {
    console.log(form);
    const url = "http://localhost:4000/create/destination";
    axios.post(url, form)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const listDestination = () => {
    const url = "http://localhost:4000/list/destination";
    axios.get(url)
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div>
      <h3>Create Profile Page</h3>
      <label>Enter Destination</label>
      <input type="text" placeholder='Enter Destination' onChange={handleInput} name="name" />
      <br/>
      <label>Enter Tour Cout</label>
      <input type="text" placeholder='Enter Tour Cout' onChange={handleInput} name="count" />
      <br/>
      <label>Choose an Image</label>
      <input type="file" onChange={(event)=> photoUpload(event)} accept=".jpef, .png, .jpg" name="image"/>
      <br />
      <button onClick={() => submitForm()}>Submit</button>
      <div>
        { list.map((value, index) => {
            return(
              <div key={index}>
                <h3>{value.name}</h3>
                <img src={value.image} className="circle-image"/>
              </div>
            )
        })}
      </div>
    </div>
  );
};

export default CreateProfilePage;