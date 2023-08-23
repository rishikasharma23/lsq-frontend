import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const EditUserForm = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const {id} = useParams();
    const [name, setName] = useState(state.name);
    const [email, setEmail] = useState(state.email);

    const handleSubmit = (e) => {

        e.preventDefault();
        const formBody = {
          name: name,
          email: email
        }

        const url = `http://localhost:3000/user/${id}`;
        axios.put(url, formBody)
            .then(response => {
                console.log('Response:', response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });

            alert("User Updated");
            navigate(`/user/${id}`);
    }

    return (
        <div style={{ margin: "30px" }}>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input onChange={(e) => setName(e.target.value)} value={name} />
                <br />
                <label>Email: </label>
                <input onChange={(e) => setEmail(e.target.value)} value={email} />
                <br />
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default EditUserForm;
