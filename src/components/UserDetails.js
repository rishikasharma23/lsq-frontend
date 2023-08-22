import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
const UserDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    //fetch specific user
    axios.get(`http://localhost:3000/user/${id}`)
      .then(response => {
        setData(response.data);
        console.log(data);
      })
  },[id])

  // const sampleUserData = {
  //   name: "Akshita Khaloria",
  //   gender: "F",
  //   email: "akshita@gmail.com",
  //   phone: 1234567890
  // }

  return (
    <div style={{ margin: "30px" }}>
      <div style={{ margin: "10px" }}>UserDetails for {id}</div>
      <div class="card" style={{ width: "30rem", height: "15rem" }}>
        <div class="card-body">
          <h5 class="card-title">Name : {data.name} {data.id} </h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">User</h6>
          <p class="card-text">Email : {data.email}</p>
          {/* <p class="card-text">Phone No : {sampleUserData.phone}</p> */}

          {/* <Link to="/user/id/edit" state={{name:data.name, email:data.email}}><button>Edit</button></Link>
          <Link to="/user/id/delete"><button>Delete</button></Link> */}

        </div>
      </div>
    </div>
  )

}

export default UserDetails