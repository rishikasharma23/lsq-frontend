import React from 'react';
import {Link} from 'react-router-dom';

const LeadBoard = ({data}) => {
  return (
    <>
    <div class="card" style={{width: "18rem"}}>
    <Link to="/lead/create"><button type="button" class="btn btn-info">Add New Lead +</button></Link>
    <div class="card" style={{width: "18rem"}}>
        <ul class="list-group list-group-flush">
        {data.map((item, index) => {
          return(
          <Link to={`/lead/${index+1}`}>
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

 

export default LeadBoard;