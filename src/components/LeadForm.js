

import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';

const LeadForm = () => {

  const [leadEmail, setLeadEmail] = useState("");
  const [leadName, setLeadName] = useState("");
  const [leadContact, setLeadContact] = useState("");
  const [leadBirthday, setLeadBirthday] = useState("");

  const navigate= useNavigate();

  const sendData = async (e) => {
    e.preventDefault();
    const formBody = {
      leadName,
      leadEmail,
      leadContact,
      leadBirthday
    }

    const url = 'http://localhost:3000/lead';
    console.log("payload", formBody)

    axios.post(url, formBody)
      .then(response => {
        console.log('Response:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
     
    navigate("/lead");

  }

  return (
    <div className="container">
      <div className="row col-5 offset-4 mt-3">
        <h3 className="">LEAD FORM</h3>
        <form onSubmit={sendData} name="leadForm" id="leadForm">
          <div className="mb-3">
            <label for="leadName" className="form-label" >Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" name="leadName" onChange={(e) => { setLeadName(e.target.value) }} />
          </div>
          <div className="mb-3">
            <label for="leadEmail" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="leadEmail" onChange={(e) => { setLeadEmail(e.target.value) }} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>

          </div>
          <div className="mb-3">
            <label for="leadContact" className="form-label">Contact</label>
            <input type="tel" className="form-control" name="leadContact" onChange={(e) => setLeadContact(e.target.value)} />
          </div>
          <div className="mb-3">
            <label for="leadBirthday" className="form-label">Birthday</label>
            <input type="date" className="form-control" name="leadBirthday" onChange={(e) => setLeadBirthday(e.target.value)} />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">By submitting you agree to share your contact details with Aditya Birla Sun Life Mutual Fund (ABSLMF). ABSLMF can contact you about the above request. ABSLMF agrees to use your information in accordance with our privacy policy.</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>

  )
}

export default LeadForm