import React from 'react';
import {useLocation} from 'react-router-dom';

const EditUserForm = () => {
    const {name,email} = props.location.state;
  return (
    <div>
        <form>
            <label>Name: </label>
            <input value={name}/>
            <label>Email: </label>
            <input value={email}/>
            <button>Update</button>
        </form>
    </div>
  )
}

export default EditUserForm