
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


const LeadBoard = () => {

  const [data, setData] = useState([]);
  //pagination

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;
  const lastIndex = currentPage * usersPerPage;
  const firstIndex = lastIndex - usersPerPage;
  const leads = data.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(data.length / usersPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);
  const [sortOrder, setSortOrder] = useState('asc');
  // const [leads, setLeads] = useState(initialLeads); 
  // console.log(leads);

 

  //pag-end
  const sortLeads = () => {
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


  useEffect(() => {
    axios.get('http://localhost:3000/lead')
      .then(response => {
        console.log(response.data);
        // Handle the successful response data here
        setData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error:', error.response); // Handle the error here
      });
  }, [])

  return (
    <>
      <div class="card" style={{ width: "18rem" }}>
        <Link to="/lead/create"><button type="button" class="btn btn-info">Add New Lead +</button></Link>
        <div class="card" style={{ width: "18rem" }}>
          <ul class="list-group list-group-flush">
            {leads.map((item, index) => {
              return (
                <Link to={`/lead/${item.id}`}>
                  <li class="list-group-item">{index + 1} {item.leadName}{item.leadContact}</li>
                </Link>
              )
            })
            }
          </ul>
        </div>
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

  )
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

}



export default LeadBoard;

