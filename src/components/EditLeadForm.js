import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const EditLeadForm = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const {id} = useParams();
    const [leadName, setLeadName] = useState(state.leadName);
    const [leadEmail, setLeadEmail] = useState(state.leadEmail);
    const [leadContact, setLeadContact] = useState(state.leadContact);
    const [leadBirthday, setLeadBirthday] = useState(state.leadBirthday);


    const handleSubmit = (e) => {
        console.log(state.leadBirthday);
        e.preventDefault();
        const formBody = {
            leadName,
            leadContact,
            leadEmail, 
            leadBirthday
        }

        const url = `http://localhost:3000/lead/${id}`;
        axios.put(url, formBody)
            .then(response => {
                console.log('Response:', response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });

            alert("User Updated");
            navigate(`/lead/${id}`);
    }

    return (
        <div style={{ margin: "30px" }}>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input onChange={(e) => setLeadName(e.target.value)} value={leadName} />
                <br />
                <label>Email: </label>
                <input onChange={(e) => setLeadEmail(e.target.value)} value={leadEmail} />
                <br />
                <label>Contact: </label>
                <input onChange={(e) => setLeadContact(e.target.value)} value={leadContact} />
                <br />
                <label>Birthday: </label>
                <input onChange={(e) => setLeadBirthday(e.target.value)} value={leadBirthday} />
                <br />
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default EditLeadForm;

