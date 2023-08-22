import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';


const UserForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");

  const sendData = async (e) => {
    e.preventDefault();
    const formBody = {
      name: name,
      email: email,
      gender: gender,
      dob: dob
    }

    const url = 'http://localhost:3000/user';
    console.log("payload", formBody)

    axios.post(url, formBody)
      .then(response => {
        console.log('Response:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
      navigate("/user");
    
  }
  return (

    <div className="Container">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="card col-8 mt-5">
          <h1>UserForm</h1>
          <div className="container-fluid d-flex justify-content-center align-items-center">
            <form onSubmit={sendData}>
              <div class="form-group mb-4">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={(e) => { setEmail(e.target.value) }}
                />
              </div>
              <div class="form-group mb-4">
                <label for="exampleInputName">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputName"
                  placeholder="Name"
                  onChange={(e) => { setName(e.target.value) }}
                />
              </div>
              <div class="form-group mb-4">
                <label class="my-1 mr-2" for="inlineFormCustomSelectPref">
                  Gender
                </label>
                <select
                  class="custom-select my-1 mr-sm-2"
                  id="inlineFormCustomSelectPref"
                  onChange={(e) => { setGender(e.target.value) }}
                >
                  <option selected>Choose...</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div class="form-group mb-4">
                <label for="exampleInputdob">Date of Birth</label>
                <input
                  type="date"
                  class="form-control"
                  id="exampleInputdob"
                  // max="<?= date('Y-m-d'); ?>"
                  max={new Date().toISOString().split("T")[0]}
                  placeholder="DOB"
                  onChange={(e) => { setDob(e.target.value) }}
                />
              </div>
              
              <button type="submit " class="btn btn-primary">
                Submit
              </button>
             
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}



export default UserForm;