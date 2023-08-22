import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const LeadDetails = () => {
  const { id } = useParams();
  

  // useEffect(()=>{
  //   //fetch specific lead
  // axios.get(`http://localhost:3001/lead/${id}`)
  // .then(response=>{
  //   const data = response.data;
  // })
  // })
  const sampleLeadData = {
    name: "Akshita Khaloria",
    email: "akshita@gmail.com",
    gender: "F",
    phone: 1234567890,
    dob: "19-09-2000"
  }

  return (
    <div style={{ margin: "30px" }}>
      <div style={{ margin: "10px" }}>LeadDetails for {id}</div>
      <div class="card" style={{ width: "30rem", height: "15rem" }}>
        <div class="card-body">
          <h5 class="card-title">Name : {sampleLeadData.name} {sampleLeadData.gender}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">Lead</h6>
          <p class="card-text">Email : {sampleLeadData.email}</p>
          <p class="card-text">Phone No : {sampleLeadData.phone}</p>
          <p class="card-text">Date of birth : {sampleLeadData.dob}</p>
          <a href="#" class="card-link">Edit</a>
        </div>
      </div>
    </div>
  )

}
export default LeadDetails