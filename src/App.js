import Login from './components/Login';
import LeadForm from './components/LeadForm';
import UserForm from './components/UserForm';
import DashBoard from './components/DashBoard';
import UserDetails from './components/UserDetails';
import LeadDetails from './components/LeadDetails';
import EditUserForm from './components/EditUserForm';
import EditLeadForm from './components/EditLeadForm';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/DashBoard" element={<DashBoard />} /> */}
          <Route path="/user" element={<DashBoard />} />
          <Route path="/lead" element={<DashBoard />} />
          <Route path="/user/:id" element={<UserDetails />} />
          <Route path="/user/create" element={<UserForm />} />
          <Route path="/lead/:id" element={<LeadDetails />} />
          <Route path="/lead/create" element={<LeadForm />} />
          <Route path="/user/edit/:id" element={<EditUserForm/>} />
          <Route path="/lead/edit/:id" element={<EditLeadForm/>}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;