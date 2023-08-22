import {useState} from 'react';
import {Link} from 'react-router-dom';

const UserBoard = ({data}) => {
//   const userData = [
//     {
//         name: "akshita",
//         age: 22,
//         dob: 324,
//     },

//     {
//         name: "rishika",
//         age: 22,
//         dob: 32,

//     },
//     {
//         name: "rishika 2",
//         age: 22,
//         dob: 43,
//     },
// ];
// const leadData = [
//     {
//         name: "lead akshita",
//         age: 22,
//         dob: 324,
//     },
//     {
//         name: "lead rishika",
//         age: 22,
//         dob: 32,
//     },
//     {
//         name: "lead rishika 2",
//         age: 22,
//         dob: 43,
//     },
// ];

  return (
    <>
    <div class="card" style={{width: "18rem"}}>
    <Link to="/user/create"><button type="button" class="btn btn-info">Add New User +</button></Link>
    <div class="card" style={{width: "18rem"}}>

        <ul class="list-group list-group-flush">
        {data.map((item, index) => {
          return(
          <Link to={`/user/${index+1}`}>
            <li class="list-group-item">{index+1} {item.name}</li>
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