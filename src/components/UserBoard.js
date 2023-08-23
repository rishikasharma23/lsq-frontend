import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const UserBoard = () => {

  const [data, setData]= useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3000/user')
  .then(response => {
    console.log(response.data);
     // Handle the successful response data here
     setData(response.data);
  })
  .catch(error => {
    console.error('There was an error:', error.response); // Handle the error here
  });
  },[])


  return (
    <>
    <div class="card" style={{width: "18rem"}}>
    <Link to="/user/create"><button type="button" class="btn btn-info">Add New User +</button></Link>
    <div class="card" style={{width: "18rem"}}>

        <ul class="list-group list-group-flush">
        {data.map((item, index) => {
          return(
          <Link to={`/user/${item.id}`}>
            <li class="list-group-item">{index+1} {item.name} {item.email}</li>
            </Link>
          )
        })
        }
        </ul>
    </div>
    </div>
    </>
  )

}

export default UserBoard