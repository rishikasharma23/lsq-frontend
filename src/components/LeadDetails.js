import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const LeadDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    //fetch specific lead
    axios.get(`http://localhost:3000/lead/${id}`)
      .then(response => {
        setData(response.data);
      })
  }, [id])

  const handleDelete = () => {

    const url = `http://localhost:3000/lead/${id}`;  // replace with your specific URL and resource ID if needed

    axios.delete(url)
      .then(response => {
        console.log('Response:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    alert("Lead deleted");

    // axios.delete()

  }

  return (
    <div style={{ margin: "30px" }}>
      <div style={{ margin: "10px" }}>LeadDetails for {id}</div>
      <div class="card" style={{ width: "30rem", height: "15rem" }}>
        <div class="card-body">
          <h5 class="card-title">Name : {data.leadName}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">Lead</h6>
          <p class="card-text">Email : {data.leadEmail}</p>
          <p class="card-text">Phone No : {data.leadContact}</p>
          <p class="card-text">Date of birth : {data.leadBirthday}</p>
          <Link to={`/lead/edit/${id}`} state={{ leadName: data.leadName, leadEmail: data.leadEmail, leadContact: data.leadContact, leadBirthday: data.leadBirthday }}><button>Edit</button></Link>
          <Link to="/lead">
            <button onClick={() => { handleDelete(data.id) }}>Delete</button>
          </Link>
          <Link to="/lead">
            <button>Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  )

}
export default LeadDetails