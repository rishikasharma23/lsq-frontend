import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const UserBoard = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;
  const lastIndex = currentPage * usersPerPage;
  const firstIndex = lastIndex - usersPerPage;
  const users = data.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(data.length / usersPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);
  const [sortOrder, setSortOrder] = useState('asc'); // Default sorting order is ascending

  useEffect(() => {
    axios.get('http://localhost:3000/user')
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error:', error.response);
      });
  }, []);

  const sortData = () => {
    const sortedData = [...data].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) return sortOrder === 'asc' ? -1 : 1;
      if (nameA > nameB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    setData(sortedData);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const addColumn = (value) =>{
    console.log(value);
 //do post request here
  }

  return (
    <>
      <div className="card" style={{ width: '18rem' }}>
      
        <Link to="/user/create">
          <button type="button" className="btn btn-info">Add New User +</button>
        </Link>

        {/* <button type="button" class="btn btn-info">Add Column +</button> */}
        <label for="addCol">Add column</label>
                <select name="addCol" id="addCol" onChange={(e)=>addColumn(e.target.value)}>
                  <option value="phoneNo">phoneNo</option>
                  <option value="experience">experience</option>
                  <option value="aadhaar">aadhaar</option>
                  <option value="gender">gender</option>
                </select>
        
        <button
          type="button"
          className="btn btn-secondary"
          onClick={sortData}
        >
          Sort by Name {sortOrder === 'asc' ? '▼' : '▲'}
        </button>

        {/* ... existing code ... */}
        <ul className="list-group list-group-flush">
          {users.map((item, index) => (
            <Link to={`/user/${item.id}`} key={item.id}>
              <li className="list-group-item">
                {index + 1} {item.name} {item.email}
              </li>
            </Link>
          ))}
        </ul>
        {/* ... existing code ... */}
      </div>
      

      <nav>
      <ul className='pagination'>
        <li className='page-item'>
          <a 
          href='#' 
          className='page-link'
          onClick={prePage}
          >Prev</a>
        </li>
        {
          numbers.map((n,i)=>(
            <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
              <a href='#' className='page-link' onClick={()=>changeCPage(n)}>{n}</a>

            </li>
          ))
        }
        <li className='page-item'>
          <a 
          href='#' 
          className='page-link'
          onClick={nextPage}
          >Next</a>
        </li>
      </ul>
    </nav>

    </>
  );

  function prePage() {
    if(currentPage !== firstIndex){
      setCurrentPage(currentPage - 1);
    }
  }
  function changeCPage(id) {
      setCurrentPage(id);
  }
  function nextPage(){
    if(currentPage !== lastIndex){
      setCurrentPage(currentPage + 1);
    }
  }
};

export default UserBoard;
































// import {useState,useEffect} from 'react';
// import {Link} from 'react-router-dom';
// import axios from 'axios';

// const UserBoard = () => {

//   const [data, setData]= useState([]);

//     //pagination

//     const [currentPage, setCurrentPage] = useState(1);

//     const usersPerPage = 5;
  
//     const lastIndex = currentPage * usersPerPage;
  
//     const firstIndex = lastIndex - usersPerPage;
  
//     const users = data.slice(firstIndex, lastIndex);
  
//     const nPage = Math.ceil(data.length / usersPerPage);
  
//     const numbers = [...Array(nPage + 1).keys()].slice(1);
  
   
  
//     //pag-end

//   useEffect(()=>{
//     axios.get('http://localhost:3000/user')
//   .then(response => {
//     console.log(response.data);
//      // Handle the successful response data here
//      setData(response.data);
//   })
//   .catch(error => {
//     console.error('There was an error:', error.response); // Handle the error here
//   });
//   },[])


//   return (
//     <>
//     <div class="card" style={{width: "18rem"}}>
//     <Link to="/user/create"><button type="button" class="btn btn-info">Add New User +</button></Link>
//     <div class="card" style={{width: "18rem"}}>

//         <ul class="list-group list-group-flush">
//         {users.map((item, index) => {
//           return(
//           <Link to={`/user/${item.id}`}>
//             <li class="list-group-item">{index+1} {item.name} {item.email}</li>
//             </Link>
//           )
//         })
//         }
//         </ul>
//     </div>
//     </div>
//     <nav>

// <ul className='pagination'>

//   <li className='page-item'>

//     <a

//     href='#'

//     className='page-link'

//     onClick={prePage}

//     >Prev</a>

//   </li>

//   {

//     numbers.map((n,i)=>(

//       <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>

//         <a href='#' className='page-link' onClick={()=>changeCPage(n)}>{n}</a>



//       </li>

//     ))

//   }

//   <li className='page-item'>

//     <a

//     href='#'

//     className='page-link'

//     onClick={nextPage}

//     >Next</a>

//   </li>

// </ul>

// </nav>
//     </>
//   )
//   function prePage() {

//     if(currentPage !== firstIndex){

//       setCurrentPage(currentPage - 1);

//     }

//   }

//   function changeCPage(id) {

//       setCurrentPage(id);

//   }

//   function nextPage(){

//     if(currentPage !== lastIndex){

//       setCurrentPage(currentPage + 1);

//     }

//   }

// }

// export default UserBoard